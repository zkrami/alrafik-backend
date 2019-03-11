import { Entity, model, property } from '@loopback/repository';

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
  url?: string;

  @property({
    type: 'string',
    required: true,
  })
  path: string;

  @property({
    type: 'string',
    required: true
  })
  bookId: string;


  constructor(data?: Partial<Media>) {
    super(data);
  }
}
