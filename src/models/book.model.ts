import { Entity, model, property } from '@loopback/repository';
import { Page } from './page.model';
import { Control } from '.';

@model()
export class Book extends Entity {

  @property({
    type: 'string',
    id: true,
    required: false
  })
  id: string;



  @property({
    type: 'string',
    required: false
  })
  code: string;

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
    itemType: 'object',
    default: []
  })
  pages: Page[];


  // default control for pages
  @property({
    type: 'object',
  })
  control?: Control;

  constructor(data?: Partial<Book>) {
    super(data);
  }
}
