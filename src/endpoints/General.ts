import { GET, POST } from '../constants'
import BaseEndpoint from '../BaseEndpoint'
import { Routes } from '../routes'
import { IQuery } from '../interfaces/Query'

import { ITypesResult } from '../interfaces/Type'
import { IHeaders } from '../SDKScope'

export default class General extends BaseEndpoint {
  public async getEntity(params: IQuery = {}, headers: IHeaders = {}, source: any = null): Promise<ITypesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getEntity(), params, headers, source)) as ITypesResult
  }
}
