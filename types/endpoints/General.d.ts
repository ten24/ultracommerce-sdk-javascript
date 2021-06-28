import BaseEndpoint from '../BaseEndpoint';
import { IQuery } from '../interfaces/Query';
import { ITypesResult } from '../interfaces/Type';
import { IHeaders } from '../SDKScope';
export default class General extends BaseEndpoint {
    getEntity(params?: IQuery, headers?: IHeaders, source?: any): Promise<ITypesResult>;
}
