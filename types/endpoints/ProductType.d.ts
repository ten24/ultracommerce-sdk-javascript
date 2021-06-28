import BaseEndpoint from '../BaseEndpoint';
import { IProductTypeResult, IProductTypesResult } from '../interfaces/ProductType';
import { IQuery } from '../interfaces/Query';
import { IHeaders } from '../SDKScope';
export default class ProductType extends BaseEndpoint {
    list(params?: IQuery, headers?: IHeaders, source?: any): Promise<IProductTypesResult>;
    get(id: string, headers?: IHeaders, source?: any): Promise<IProductTypeResult>;
}
