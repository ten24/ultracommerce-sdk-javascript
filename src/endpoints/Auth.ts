import { POST } from '../constants'
import BaseEndpoint from '../BaseEndpoint'
import { IQuery } from '../interfaces/Query'
import { AuthLoginAttr, IAuthResponseResult, AuthAPIKeyAttr } from '../interfaces/Authentication'
import { Routes } from '../routes'
import { IHeaders } from '../SDKScope'

export default class Auth extends BaseEndpoint {
  public async login(params: AuthLoginAttr, headers: IHeaders = {}, source: any = null): Promise<IAuthResponseResult> {
    let result = (await this.sdkScope.httpService.slatwallResponse(POST, Routes.login(), params, headers, source)) as IAuthResponseResult
    if (result.isSuccess()) {
      //Set bearerToken in local Storage
      this.sdkScope.bearerToken = result.success().token
    } else {
      this.sdkScope.bearerToken = null
    }
    return result
  }

  public async generateToken(params: AuthAPIKeyAttr, headers: IHeaders = {}, source: any = null): Promise<IAuthResponseResult> {
    let result = (await this.sdkScope.httpService.slatwallResponse(POST, Routes.login(), params, headers, source)) as IAuthResponseResult
    if (result.isSuccess()) {
      //Set bearerToken in local Storage
      this.sdkScope.bearerToken = result.success().token
    } else {
      this.sdkScope.bearerToken = null
    }
    return result
  }

  public async revokeToken(params: IQuery = {}, headers: IHeaders = {}, source: any = null): Promise<IAuthResponseResult> {
    this.sdkScope.bearerToken = null
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.logout(), params, headers, source)) as IAuthResponseResult
  }
}
