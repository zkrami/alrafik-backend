import { Count, Filter, Where } from '@loopback/repository';
import { Book } from '../models';
import { BookRepository } from '../repositories';
export declare class BookController {
    bookRepository: BookRepository;
    constructor(bookRepository: BookRepository);
    create(book: Book): Promise<Book>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Book[]>;
    updateAll(book: Book, where?: Where): Promise<Count>;
    findById(id: string): Promise<Book>;
    updateById(id: string, book: Book): Promise<void>;
    replaceById(id: string, book: Book): Promise<void>;
    deleteById(id: string): Promise<void>;
}
