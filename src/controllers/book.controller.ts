import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import * as fs from 'fs';
import * as archiver from 'archiver';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
  Response,
  RestBindings,
} from '@loopback/rest';

import { Book, Shape, ActionType } from '../models';
import { BookRepository, MediaRepository } from '../repositories';
import { response } from 'express';
import { Stream } from 'stream';
import { inject } from '@loopback/core';


export class BookController {
  constructor(
    @repository(BookRepository)
    public bookRepository: BookRepository,
    @repository(MediaRepository)
    public mediaRepository: MediaRepository,
    @inject(RestBindings.Http.RESPONSE) public response: Response,

  ) { }

  @post('/books', {
    responses: {
      '200': {
        description: 'Book model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Book } } },
      },
    },
  })
  async create(@requestBody() book: Book): Promise<Book> {
    return await this.bookRepository.create(book);
  }

  @get('/books/count', {
    responses: {
      '200': {
        description: 'Book model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Book)) where?: Where,
  ): Promise<Count> {
    return await this.bookRepository.count(where);
  }

  @get('/books', {
    responses: {
      '200': {
        description: 'Array of Book model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Book } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Book)) filter?: Filter,
  ): Promise<Book[]> {
    return await this.bookRepository.find(filter);
  }

  @patch('/books', {
    responses: {
      '200': {
        description: 'Book PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() book: Book,
    @param.query.object('where', getWhereSchemaFor(Book)) where?: Where,
  ): Promise<Count> {
    return await this.bookRepository.updateAll(book, where);
  }

  @get('/books/{id}', {
    responses: {
      '200': {
        description: 'Book model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Book } } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Book> {
    return await this.bookRepository.findById(id);
  }

  @patch('/books/{id}', {
    responses: {
      '204': {
        description: 'Book PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() book: Book,
  ): Promise<void> {

    await this.bookRepository.updateById(id, book);
  }

  @put('/books/{id}', {
    responses: {
      '204': {
        description: 'Book PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() book: Book,
  ): Promise<void> {
    await this.bookRepository.replaceById(id, book);
  }

  @del('/books/{id}', {
    responses: {
      '204': {
        description: 'Book DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.bookRepository.deleteById(id);
  }


  @get('/books/download/{id}', {
    responses: {
      '200': {
        description: 'Book model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Book } } },
      },
    },
  })
  async download(@param.path.string('id') id: string): Promise<Stream> {


    return new Promise(async (resolve, reject) => {


      let archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
      });

      let book = await this.bookRepository.findById(id);

      for (let page of book.pages) {

        for (let shape of Object.values(page.shapes)) {
          // foreach audio action
          for (let action of shape.actions.filter((a: any) => a.type == ActionType.Audio)) {

            for (let languageValue of Object.values(action.value)) {

              // @ts-ignore
              let mediaId = languageValue.mediaId;
              let media = await this.mediaRepository.findById(mediaId);
              archive.append(fs.createReadStream(media.path), { name: media.id });
            }

          }
        }
      }

      archive.on("error", reject);

      archive.append(JSON.stringify(book), { name: 'book.json' });

      this.response.header('Content-Disposition', 'attachment;filename=Book.zip')
        .header('Content-Type', 'attachment;filename=Book.zip')
        .header('Content-Transfer-Encoding', 'binary');



      archive.finalize();
      // @todo resolve on finished
      resolve(archive);



    });

  }
}
