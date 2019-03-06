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

export class ExpressServer {
  private app: express.Application;
  public readonly lbApp: AlrafikBackendApplication;
  private server: http.Server;

  constructor(options: ApplicationConfig = {}) {
    this.app = express();


    this.lbApp = new AlrafikBackendApplication(options);


    // Custom Express routes
    this.app.get('/', function (_req: Request, res: Response) {
      res.sendFile(path.resolve('public/express.html'));
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
      req.user = { id: 'userId' };
      next();
    });
    // uploadx
    this.app.use('/uploadx/', upload, async (req, res) => {


      let repo = await this.lbApp.getRepository(MediaRepository);
      let media = new Media();
      media.path = req.path;
      media.name = "teeet";
      repo.create(media);
    });


    console.log(this.lbApp.getSync("controllers.MediaMediaController"));

  }

  public async boot() {
    await this.lbApp.boot();
  }

  public async start() {
    this.server = this.app.listen(3000);
    await pEvent(this.server, 'listening');
  }

  // For testing purposes
  public async stop() {
    if (!this.server) return;
    this.server.close();
    await pEvent(this.server, 'close');
  }
}
