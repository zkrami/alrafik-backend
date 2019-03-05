import { Model, model, property } from '@loopback/repository';
import { Action } from './action.model';

@model()
export class Shape extends Model {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'array',
    itemType: Action,
  })
  actions?: Action[];


  constructor(data?: Partial<Shape>) {
    super(data);
  }
}
