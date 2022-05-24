import { HttpService } from './HttpService'

export class SDKConfig {
  public host = ''
  public version = 1
}

export interface IAuthToken {
  bearerToken?: string
}

export type IHeaders = { [k: string]: string }

export class SDKScope {
  public readonly sdkConfig: SDKConfig
  private authToken: IAuthToken
  public httpService: HttpService

  constructor(config: SDKConfig, authToken: IAuthToken = {}) {
    this.sdkConfig = config
    this.authToken = authToken
    this.httpService = new HttpService(this)
  }

  public get bearerToken() {
    if (this.authToken.bearerToken) {
      return this.authToken.bearerToken
    }

    if (checkBrowser()) this.authToken.bearerToken = localStorage.getItem('token')
    return this.authToken.bearerToken
  }

  public set bearerToken(bearerToken: string) {
    this.authToken.bearerToken = bearerToken
    if (checkBrowser()) localStorage.setItem('token', bearerToken)
  }
}

export default SDKScope

// check if the code is running in browser or not
// i.e , node or browser
// @return {boolean}
export function checkBrowser() {
  if (typeof window === 'undefined') {
    return false
  }
  return true
}
