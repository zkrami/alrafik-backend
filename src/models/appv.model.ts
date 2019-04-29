import { Entity, model, property } from '@loopback/repository';

@model()
export class Appv extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  bookCounter: number;


  constructor(data?: Partial<Appv>) {
    super(data);
  }
}
