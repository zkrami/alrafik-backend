import { Entity } from '@loopback/repository';
import { Page } from './page.model';
export declare class Book extends Entity {
    id: string;
    name: object;
    description?: object;
    pages?: Page[];
    constructor(data?: Partial<Book>);
}
