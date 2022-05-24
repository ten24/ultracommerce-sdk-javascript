import { HttpService } from './HttpService';
export declare class SDKConfig {
    host: string;
    version: number;
}
export interface IAuthToken {
    bearerToken?: string;
}
export declare type IHeaders = {
    [k: string]: string;
};
export declare class SDKScope {
    readonly sdkConfig: SDKConfig;
    private authToken;
    httpService: HttpService;
    constructor(config: SDKConfig, authToken?: IAuthToken);
    get bearerToken(): string;
    set bearerToken(bearerToken: string);
}
export default SDKScope;
export declare function checkBrowser(): boolean;
