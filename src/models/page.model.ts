import { model, property, Model } from '@loopback/repository';
import { Control } from './control.model';
import { Direction } from './direction.model';

@model()
export class Page extends Model {

  @property({
    type: 'string',
    id: true,

  })
  id: string;

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


  // control shape and actions
  @property({
    type: 'object',
  })
  control?: Control;


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


  @property({
    type: 'object',
    default: {}
  })
  direction: Direction;
  constructor(data?: Partial<Page>) {
    super(data);
  }
}
