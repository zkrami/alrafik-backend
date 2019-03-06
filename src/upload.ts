import * as express from 'express';
import cors = require('cors');
import { uploadx } from 'node-uploadx';
import * as path from 'path';
import * as uuid from 'uuid';
export let router = express.Router();


const corsOptions = {
  exposedHeaders: ['Range', 'Location']
};


function uniqueName(name: string): string {
  return uuid() + path.extname(name);
}

router.use(cors(corsOptions));
router.use(uploadx({
  maxUploadSize: '180MB',
  destination: req => path.resolve(`../uploads/${uniqueName(req.body.name)}`)
}),
  (req, res, next) => {
    if (req.file) {

      res.json(req.file.metadata);
      next();
    } else {

      res.send();
    }
  })


