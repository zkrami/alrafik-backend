import { Model } from '@loopback/repository';
export declare class Page extends Model {
    content?: string;
    id: string;
    shapes?: object;
    name: object;
    description: object;
    constructor(data?: Partial<Page>);
}
