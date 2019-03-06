import { Entity, model, property } from '@loopback/repository';
import { type } from 'os';

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



  @property({
    type: 'string',
    required: false,
  })
  type: string;




  @property({
    type: 'number',
    required: false,
  })
  size: number;


  @property({
    type: 'string',
    required: false
  })
  url: string;


  constructor(data?: Partial<Media>) {
    super(data);
  }
}
