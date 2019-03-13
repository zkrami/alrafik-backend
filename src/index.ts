import { ExpressServer } from './server';
import { ApplicationConfig } from '@loopback/core';
import { env } from 'process';

export { ExpressServer };

export async function main(options: ApplicationConfig = {}) {

  require("dotenv").config();
  const server = new ExpressServer(options);
  await server.boot();
  await server.start();
  console.log('Server is running on http://127.0.0.1:3000');
}
