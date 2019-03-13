import { DefaultCrudRepository } from '@loopback/repository';
import { Book } from '../models';
import { DbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class BookRepository extends DefaultCrudRepository<
  Book,
  typeof Book.prototype.id
  > {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Book, dataSource);
  }
}
