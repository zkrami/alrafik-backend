import {Model, model, property} from '@loopback/repository';

@model()
export class Direction extends Model {
  @property({
    type: 'string',
  })
  up?: string;

  @property({
    type: 'string',
  })
  down?: string;

  @property({
    type: 'string',
  })
  right?: string;

  @property({
    type: 'string',
  })
  left?: string;


  constructor(data?: Partial<Direction>) {
    super(data);
  }
}
