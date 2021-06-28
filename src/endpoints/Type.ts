import { GET, POST } from '../constants'
import BaseEndpoint from '../BaseEndpoint'
import { Routes } from '../routes'
import { IQuery, productOptionGroup } from '../interfaces/Query'

import { ITypeResult, ITypesResult } from '../interfaces/Type'
import { IHeaders } from '../SDKScope'

export default class Type extends BaseEndpoint {
  public async getTypesByTypeCode(params: IQuery = {}, headers: IHeaders = {}, source: any = null): Promise<ITypesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getSystemTypesByTypeCode(), params, headers, source)) as ITypesResult
  }
}
