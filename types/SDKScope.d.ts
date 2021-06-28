import { HttpService } from "./HttpService";
export declare class SDKConfig {
    private host;
    private version;
}
export interface IAuthToken {
    bearerToken?: string;
}
export declare type IHeaders = {
    [k: string]: string;
};
export declare class SDKScope {
    readonly sdkConfig: any;
    private authToken;
    httpService: HttpService;
    constructor(config: SDKConfig, authToken?: IAuthToken);
    get bearerToken(): string;
    set bearerToken(bearerToken: string);
}
export default SDKScope;
