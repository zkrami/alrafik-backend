import { DefaultCrudRepository } from '@loopback/repository';
import { Book } from '../models';
import { DbDataSource } from '../datasources';
export declare class BookRepository extends DefaultCrudRepository<Book, typeof Book.prototype.id> {
    constructor(dataSource: DbDataSource);
}
