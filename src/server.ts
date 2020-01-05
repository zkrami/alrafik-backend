import { AlrafikBackendApplication } from './application';
import { ApplicationConfig } from '@loopback/core';
import { Request, Response } from 'express';
import * as express from 'express';
import * as path from 'path';
import pEvent from 'p-event';
import * as http from 'http';
import * as bodyParser from 'body-parser';
import { router as upload } from './upload';
import { MediaRepository } from './repositories';
import { Media } from './models';
import { environemt } from './environment';

export class ExpressServer {
  private app: express.Application;
  public readonly lbApp: AlrafikBackendApplication;
  private server: http.Server;

  constructor(options: ApplicationConfig = {}) {
    this.app = express();


    this.lbApp = new AlrafikBackendApplication(options);


    // Custom Express routes
    this.app.get('/', function (_req: Request, res: Response) {
      res.sendFile(path.resolve('public/index.html'));
    });
    this.app.get('/hello', function (_req: Request, res: Response) {
      res.send('Hello world!');
    });

    // Serve static files in the public folder
    this.app.use(express.static('public'));



    // @temp
    this.app.get("/openapi.json", (req, res) => {
      res.redirect("/api/openapi.json");
    });
    // Expose the front-end assets via Express, not as LB4 route
    this.app.use('/api', this.lbApp.requestHandler);



    // body parser
    this.app.use(bodyParser.json());

    // auth
    this.app.use((req, res, next) => {

      //@ts-ignore
      req.user = { id: 'userId' };
      next();
    });

    // uploadx
    //serve uploadx uploads

    this.app.use("/uploads", express.static(environemt.uploadDirectory));

    this.app.use('/uploadx/', upload, async (req, res) => {


      // store file in db
      // @todo shall put in controller
      let repo = await this.lbApp.getRepository(MediaRepository);
      let media = new Media();
      media.path = req.file.path;
      media.name = req.file.metadata.name;
      media.type = req.file.metadata.mimeType;
      media.size = req.file.size;

      media.url = "uploads/" + path.basename(req.file.path);

      if (req.header("bookId"))
        media.bookId = req.header("bookId") as string;

      repo.create(media);
    });


    // error handeler
    this.app.use((err: any, req: Request, res: Response, next: any) => {
      res.status(err.status || 500).json({
        error: {
          message: err.message || 'Internal Server Error'
        }
      });
    });



  }

  public async boot() {
    await this.lbApp.boot();
  }

  public async start() {
    this.server = this.app.listen(3000);
    //@ts-ignore
    await pEvent(this.server, 'listening');
  }

  // For testing purposes
  public async stop() {
    if (!this.server) return;
    this.server.close();
    //@ts-ignore
    await pEvent(this.server, 'close');
  }
}
