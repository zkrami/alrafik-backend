import { Model, model, property } from '@loopback/repository';

@model()
export class Test extends Model {
  @property({
    type: 'any',
  })
  asd?: any;


  constructor(data?: Partial<Test>) {
    super(data);
  }
}
