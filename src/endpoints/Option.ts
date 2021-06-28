import { GET } from '../constants'
import BaseEndpoint from '../BaseEndpoint'
import { IOptionResult, IOptionsResult } from '../interfaces/Option'
import { IQuery } from '../interfaces/Query'
import { parseParams } from '../helpers/parseParams'
import { Routes } from '../routes'
import { IHeaders } from '../SDKScope'

export default class Option extends BaseEndpoint {
  public async list(params: IQuery = {}, headers: IHeaders = {}, source: any = null): Promise<IOptionsResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.listOption(), parseParams(params), headers, source)) as IOptionsResult
  }

  public async get(id: string, headers: IHeaders = {}, source: any = null): Promise<IOptionResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getOption(id), {}, headers, source)) as IOptionResult
  }
}
