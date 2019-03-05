import { Model } from '@loopback/repository';
export declare class Action extends Model {
    type?: string;
    value?: object;
    constructor(data?: Partial<Action>);
}
