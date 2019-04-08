import { Model, model, property } from '@loopback/repository';
import { DrawingContent } from './drawing-content.model';

@model()
export class Control extends DrawingContent {

  constructor(data?: Partial<Control>) {
    super(data);
  }

}
