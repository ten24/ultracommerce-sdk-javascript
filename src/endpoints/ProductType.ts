import { GET } from '../constants'
import BaseEndpoint from '../BaseEndpoint'
import { IProductTypeResult, IProductTypesResult } from '../interfaces/ProductType'
import { IQuery } from '../interfaces/Query'
import { parseParams } from '../helpers/parseParams'
import { Routes } from '../routes'
import { IHeaders } from '../SDKScope'

export default class ProductType extends BaseEndpoint {
  public async list(params: IQuery = {}, headers: IHeaders = {}, source: any = null): Promise<IProductTypesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.listProductType(), parseParams(params), headers, source)) as IProductTypesResult
  }

  public async get(id: string, headers: IHeaders = {}, source: any = null): Promise<IProductTypeResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getProductType(id), {}, headers, source)) as IProductTypeResult
  }
}
