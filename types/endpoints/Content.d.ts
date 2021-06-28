import BaseEndpoint from '../BaseEndpoint';
import { IContentResult } from '../interfaces/Content';
import { IHeaders } from '../SDKScope';
import { IContentData, IContentGetConfiguration } from '../interfaces/requests/index';
export default class Content extends BaseEndpoint {
    get(params: IContentData, headers?: IHeaders, source?: any): Promise<IContentResult>;
    getConfiguration(params: IContentGetConfiguration, headers?: IHeaders, source?: any): Promise<IContentResult>;
    addFormResponse(params?: any, headers?: IHeaders, source?: any): Promise<IContentResult>;
}
