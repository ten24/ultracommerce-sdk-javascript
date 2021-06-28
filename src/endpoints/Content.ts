import { GET, POST } from '../constants'
import BaseEndpoint from '../BaseEndpoint'
import { IContentResult } from '../interfaces/Content'
import { IQuery } from '../interfaces/Query'
import { Routes } from '../routes'
import { IHeaders } from '../SDKScope'
import { IContentData, IContentGetConfiguration } from '../interfaces/requests/index'

export default class Content extends BaseEndpoint {
  public async get(params: IContentData, headers: IHeaders = {}, source: any = null): Promise<IContentResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getContent(), params, headers, source)) as IContentResult
  }

  public async getConfiguration(params: IContentGetConfiguration, headers: IHeaders = {}, source: any = null): Promise<IContentResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getConfiguration(), params, headers, source)) as IContentResult
  }
  public async addFormResponse(params: any = {}, headers: IHeaders = {}, source: any = null): Promise<IContentResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addFormResponse(), params, headers, source)) as IContentResult
  }
}
