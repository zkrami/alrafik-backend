import { Model, model, property } from '@loopback/repository';

export enum ActionType {
  Text = 'text', Audio = 'audio', Navigation = 'navigation', Url = 'url'
}
@model()
export class Action extends Model {
  @property({
    type: 'string', // need to be enum
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
