import { GET } from '../constants'
import BaseEndpoint from '../BaseEndpoint'
import { ICategoryResult, ICategoriesResult } from '../interfaces/Category'
import { IQuery } from '../interfaces/Query'
import { parseParams } from '../helpers/parseParams'
import { Routes } from '../routes'
import { IHeaders } from '../SDKScope'

export default class Category extends BaseEndpoint {
  public async list(params: IQuery = {}, headers: IHeaders = {}, source: any = null): Promise<ICategoriesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.listCategory(), parseParams(params), headers, source)) as ICategoriesResult
  }

  public async get(id: string, headers: IHeaders = {}, source: any = null): Promise<ICategoryResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getCategory(id), {}, headers, source)) as ICategoryResult
  }
}
