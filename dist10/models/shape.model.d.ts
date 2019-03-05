import { Model } from '@loopback/repository';
import { Action } from './action.model';
export declare class Shape extends Model {
    id?: string;
    actions?: Action[];
    constructor(data?: Partial<Shape>);
}
