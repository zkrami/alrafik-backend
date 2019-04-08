import { Entity, model, property, Model } from '@loopback/repository';
import { Control } from './control.model';
import { DrawingContent } from '.';
@model()
export class Page extends DrawingContent {

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

  constructor(data?: Partial<Page>) {
    super(data);
  }
}
