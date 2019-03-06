import {Entity, model, property} from '@loopback/repository';

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
  name?: string;

  @property({
    type: 'string',
    required: true,
  })
  path: string;


  constructor(data?: Partial<Media>) {
    super(data);
  }
}
