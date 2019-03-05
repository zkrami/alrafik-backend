import { Entity, model, property } from '@loopback/repository';
import { Page } from './page.model';

@model()
export class Book extends Entity {

  @property({
    type: 'string',
    id: true,
    required: false
  })
  id: string;

  @property({
    type: 'object',
    required: true,

  })
  name: object;

  @property({
    type: 'object',
  })
  description?: object;

  @property({
    type: 'array',
    itemType: Page,
  })
  pages?: Page[];


  constructor(data?: Partial<Book>) {
    super(data);
  }
}
