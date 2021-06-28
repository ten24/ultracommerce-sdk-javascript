import { AxiosError, AxiosInstance } from 'axios';
import { SlatwallError, SlatwallSDKError } from './errors';
import { IHeaders, SDKScope } from './SDKScope';
import { ErrorClass } from './interfaces/errors/ErrorClass';
import { JsonApiResponse } from './interfaces/JsonApi';
import { ResultResponse } from './interfaces/ResultResponse';
export declare class HttpService {
    axios: AxiosInstance;
    readonly sdkScope: SDKScope;
    constructor(sdkScope: SDKScope);
    slatwallResponse(method: string, route: string, params?: any, headers?: IHeaders, source?: any): Promise<ResultResponse<JsonApiResponse>>;
    protected classifyError(error: AxiosError): ErrorClass;
    protected processError(error: AxiosError): SlatwallSDKError;
    protected processSlatwallError(error: AxiosError): SlatwallError;
    protected createHeaders: (headers: IHeaders) => IHeaders;
}
