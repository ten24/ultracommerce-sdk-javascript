import BaseEndpoint from '../BaseEndpoint';
import { IContentResult } from '../interfaces/Content';
import { IHeaders } from '../SDKScope';
import { IContentData, IContentGetConfiguration, IContentByPage, IVerifyRecaptcha, IDownloadFile } from '../interfaces/requests/index';
export default class Content extends BaseEndpoint {
    get(params: IContentData, headers?: IHeaders, source?: any): Promise<IContentResult>;
    getConfiguration(params: IContentGetConfiguration, headers?: IHeaders, source?: any): Promise<IContentResult>;
    addFormResponse(params?: any, headers?: IHeaders, source?: any): Promise<IContentResult>;
    getContentByPage(params: IContentByPage, headers?: IHeaders, source?: any): Promise<IContentResult>;
    verifyRecaptcha(params: IVerifyRecaptcha, headers?: IHeaders, source?: any): Promise<IContentResult>;
    downloadFile(params: IDownloadFile, headers?: IHeaders, source?: any): Promise<IContentResult>;
}
