import { HttpService } from "./HttpService";

export class SDKConfig {
  private host = '';
  private version = 1;
}

export interface IAuthToken {
  bearerToken?: string;
}

export type IHeaders = { [k:string] : string};

export class SDKScope {
  public readonly sdkConfig: any;
  private authToken: any;
  public httpService : HttpService;
  
  constructor(config: SDKConfig, authToken: IAuthToken = {} ) {
    this.sdkConfig =  config;
    this.authToken = authToken;
    this.httpService = new HttpService(this);
  }

  public get bearerToken() {
    if(this.authToken.bearerToken){
      return this.authToken.bearerToken;
    }

    this.authToken.bearerToken = localStorage.getItem('token');
    return this.authToken.bearerToken;
  }

  public set bearerToken(bearerToken: string) {
    this.authToken.bearerToken = bearerToken;
    localStorage.setItem('token', bearerToken);
  }
  
}

export default SDKScope;
