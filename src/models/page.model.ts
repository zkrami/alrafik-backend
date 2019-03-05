import { Entity, model, property, Model } from '@loopback/repository';
import { Shape } from './shape.model';
@model()
export class Page extends Model {
  @property({
    type: 'string',
  })
  content?: string;

  @property({
    type: 'string',
    id: true,

  })
  id: string;


  @property({
    type: 'object',
  })
  shapes?: object;




  @property({
    type: 'object',
    required: true,

  })
  name: object;


  @property({
    type: 'object',
    required: true,
  })
  description: object;


  constructor(data?: Partial<Page>) {
    super(data);
  }
}
