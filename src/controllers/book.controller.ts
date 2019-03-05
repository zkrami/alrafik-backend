import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';

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
} from '@loopback/rest';

import { Book } from '../models';
import { BookRepository } from '../repositories';

export class BookController {
  constructor(
    @repository(BookRepository)
    public bookRepository: BookRepository,
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
}
