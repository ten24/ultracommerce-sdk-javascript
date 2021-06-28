import BaseEndpoint from '../BaseEndpoint';
import { IOptionResult, IOptionsResult } from '../interfaces/Option';
import { IQuery } from '../interfaces/Query';
import { IHeaders } from '../SDKScope';
export default class Option extends BaseEndpoint {
    list(params?: IQuery, headers?: IHeaders, source?: any): Promise<IOptionsResult>;
    get(id: string, headers?: IHeaders, source?: any): Promise<IOptionResult>;
}
