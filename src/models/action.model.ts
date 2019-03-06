import { Model, model, property } from '@loopback/repository';

@model()
export class Action extends Model {
  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'object',
  })
  value?: object;


  constructor(data?: Partial<Action>) {
    super(data);
  }
}
