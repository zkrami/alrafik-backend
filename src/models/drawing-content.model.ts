import { Model, model, property } from '@loopback/repository';

@model()
export class DrawingContent extends Model {


  constructor(data?: Partial<DrawingContent>) {
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
