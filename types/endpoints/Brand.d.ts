import BaseEndpoint from '../BaseEndpoint';
import { IBrandResult, IBrandsResult } from '../interfaces/Brand';
import { IQuery } from '../interfaces/Query';
import { IHeaders } from '../SDKScope';
export default class Brand extends BaseEndpoint {
    list(params?: IQuery, headers?: IHeaders, source?: any): Promise<IBrandsResult>;
    get(id: string, headers?: IHeaders, source?: any): Promise<IBrandResult>;
}
