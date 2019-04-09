import { Model, model, property } from '@loopback/repository';

@model()
export class Control extends Model {

  constructor(data?: Partial<Control>) {
    super(data);
  }

  @property({
    type: 'string',
  })
  content?: string; // svg content

  // key => value associative array to Shape Model
  @property({
    type: 'object',
    default: {}
  })
  shapes: object;

}
