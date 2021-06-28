import { GET } from '../constants'
import BaseEndpoint from '../BaseEndpoint'
import { IBrandResult, IBrandsResult } from '../interfaces/Brand'
import { IQuery } from '../interfaces/Query'
import { parseParams } from '../helpers/parseParams'
import { Routes } from '../routes'
import { IHeaders } from '../SDKScope'

export default class Brand extends BaseEndpoint {
  public async list(params: IQuery = {}, headers: IHeaders = {}, source: any = null): Promise<IBrandsResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.listBrand(), parseParams(params), headers, source)) as IBrandsResult
  }

  public async get(id: string, headers: IHeaders = {}, source: any = null): Promise<IBrandResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getBrand(id), {}, headers, source)) as IBrandResult
  }
}
