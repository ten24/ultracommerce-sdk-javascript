import { POST } from '../constants'
import BaseEndpoint from '../BaseEndpoint'
import { IOrderResult } from '../interfaces/Order'
import { IQuery } from '../interfaces/Query'
import { parseParams } from '../helpers/parseParams'
import { Routes } from '../routes'
import { IOrderDuplicate, IOrderDelete, IOrderSetOrderOnCart } from '../interfaces/requests/index'
import { IHeaders } from '../SDKScope'
export default class Order extends BaseEndpoint {
  public async get(params: IQuery = {}, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.getOrderDetails(), params, headers, source)) as IOrderResult
  }

  public async duplicate(params: IOrderDuplicate, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.duplicateOrder(), params, headers, source)) as IOrderResult
  }

  public async delete(params: IOrderDelete, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.deleteOrder(), params, headers, source)) as IOrderResult
  }

  public async setOrderOnCart(params: IOrderSetOrderOnCart, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.changeOrder(), params, headers, source)) as IOrderResult
  }
}
