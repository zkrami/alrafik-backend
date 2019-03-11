import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Book } from './book.model';

@model()
export class Media extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'number',
  })
  size?: number;

  @property({
    type: 'string',
  })
  name?: string;


  @property({
    type: 'string',
  })
  url?: string;

  @property({
    type: 'string',
    required: true,
  })
  path: string;


  @belongsTo(() => Book)
  bookId: string;




  constructor(data?: Partial<Media>) {
    super(data);
  }
}
