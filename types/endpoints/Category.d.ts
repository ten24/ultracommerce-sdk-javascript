import BaseEndpoint from '../BaseEndpoint';
import { ICategoryResult, ICategoriesResult } from '../interfaces/Category';
import { IQuery } from '../interfaces/Query';
import { IHeaders } from '../SDKScope';
export default class Category extends BaseEndpoint {
    list(params?: IQuery, headers?: IHeaders, source?: any): Promise<ICategoriesResult>;
    get(id: string, headers?: IHeaders, source?: any): Promise<ICategoryResult>;
}
