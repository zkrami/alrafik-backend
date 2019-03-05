import { Entity, model, property } from '@loopback/repository';

@model()
export class Test extends Entity {
  @property({
    type: 'string',
    id: true,
    required: false,
  })
  _id: string;

  @property({
    type: 'string',
  })
  name?: string;


  constructor(data?: Partial<Test>) {
    super(data);
  }
}
