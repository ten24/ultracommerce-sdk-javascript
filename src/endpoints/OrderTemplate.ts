import { GET, POST } from '../constants'
import BaseEndpoint from '../BaseEndpoint'
import { Routes } from '../routes'
import { IQuery } from '../interfaces/Query'
import { IOrderTemplateResult, IOrderTemplatesResult, IOrderTemplateResponseResult } from '../interfaces/OrderTemplate'

import { IWishListShare, IWishListRemoveItem, IOrderTemplateCreate, IOrderTemplateCreateAndAddItem, IOrderTemplateGet, IOrderTemplateList, IOrderTemplateAddItem, IOrderTemplateRemoveItem, IOrderTemplateAddPromotionCode, IOrderTemplateRemovePromotionCode, IOrderTemplateGetAppliedPromotionCode, IOrderTemplateItemEdit, IOrderTemplateEdit, IOrderTemplateEditFrequency, IOrderTemplateEditSchedule, IOrderTemplateCancelOrderTemplate, IOrderTemplateUpdateShipping, IOrderTemplateUpdateBilling } from '../interfaces/requests/OrderTemplate'
import { IHeaders } from '../SDKScope'

export default class OrderTemplate extends BaseEndpoint {
  public async create(params: IOrderTemplateCreate, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.createOrderTemplate(), params, headers, source)) as IOrderTemplateResult
  }

  public async addItem(params: IOrderTemplateAddItem, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.addOrderTemplateItem(), params, headers, source)) as IOrderTemplateResult
  }

  public async createAndAddItem(params: IOrderTemplateCreateAndAddItem, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.addItemAndCreateWishlist(), params, headers, source)) as IOrderTemplateResult
  }

  public async removeItem(params: IOrderTemplateRemoveItem, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.removeOrderTemplateItem(), params, headers, source)) as IOrderTemplateResult
  }

  public async addPromotionCode(params: IOrderTemplateAddPromotionCode, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.addOrderTemplatePromotionCode(), params, headers, source)) as IOrderTemplateResult
  }

  public async removePromotionCode(params: IOrderTemplateRemovePromotionCode, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.removeOrderTemplatePromotionCode(), params, headers, source)) as IOrderTemplateResult
  }

  public async getAppliedPromotionCodes(params: IOrderTemplateGet, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getAppliedOrderTemplatePromotionCodes(), params, headers, source)) as IOrderTemplateResult
  }

  public async getPromotionProducts(params: IOrderTemplateGetAppliedPromotionCode, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getOrderTemplatePromotionProducts(), params, headers, source)) as IOrderTemplateResult
  }

  public async removePromotionItems(params: IOrderTemplateGetAppliedPromotionCode, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.deleteOrderTemplatePromoItems(), params, headers, source)) as IOrderTemplateResult
  }

  public async list(params: IOrderTemplateList, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplatesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getOrderTemplates(), params, headers, source)) as IOrderTemplatesResult
  }

  public async createWishlist(params: IOrderTemplateCreate, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.createWishlist(), params, headers, source)) as IOrderTemplateResult
  }

  public async addWishlistItem(params: IOrderTemplateAddItem, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.addWishlistItem(), params, headers, source)) as IOrderTemplateResult
  }
  public async addWishlistItemAndGetWishList(params: IOrderTemplateAddItem, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addWishlistItemAndGetWishList(), params, headers, source)) as IOrderTemplateResult
  }

  public async removeWishlistItem(params: IWishListRemoveItem, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.removeWishlistItem(), params, headers, source)) as IOrderTemplateResult
  }

  public async removeWishlistItemAndGetWishList(params: IWishListRemoveItem, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.removeWishlistItemAndGetWishList(), params, headers, source)) as IOrderTemplateResult
  }

  public async shareWishlist(params: IWishListShare, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.shareWishlist(), params, headers, source)) as IOrderTemplateResult
  }

  public async getWishlists(headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getWishlists(), {}, headers, source)) as IOrderTemplateResult
  }

  public async getWishListItems(headers: IHeaders = {}, source: any = null): Promise<IOrderTemplatesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getWishListItems(), {}, headers, source)) as IOrderTemplatesResult
  }
  
  public async getOrderTemplateItems(params: IOrderTemplateGet, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getOrderTemplateItems(), params, headers, source)) as IOrderTemplateResult
  }
  
  public async getOrderTemplateDetails(params: IOrderTemplateGet, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getOrderTemplateDetails(), params, headers, source)) as IOrderTemplateResult
  }
  
  public async updateOrderTemplateShipping(params: IOrderTemplateUpdateShipping, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.updateOrderTemplateShipping(), params, headers, source)) as IOrderTemplateResult
  }
  
  public async updateOrderTemplateBilling(params: IOrderTemplateUpdateShipping, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.updateOrderTemplateBilling(), params, headers, source)) as IOrderTemplateResult
  }
  
  public async getCancellationReasonTypeOptions(headers: IHeaders = {}, source: any = null): Promise<IOrderTemplatesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getCancellationReasonTypeOptions(), {}, headers, source)) as IOrderTemplatesResult
  }
  
  public async getFrequencyTermOptions(headers: IHeaders = {}, source: any = null): Promise<IOrderTemplatesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getFrequencyTermOptions(), {}, headers, source)) as IOrderTemplatesResult
  }
  
  public async getScheduleDateChangeReasonTypeOptions(headers: IHeaders = {}, source: any = null): Promise<IOrderTemplatesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getScheduleDateChangeReasonTypeOptions(), {}, headers, source)) as IOrderTemplatesResult
  }
  
  public async editOrderTemplateItem(params: IOrderTemplateItemEdit, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.editOrderTemplateItem(), params, headers, source)) as IOrderTemplateResult
  }
  
  public async editOrderTemplate(params: IOrderTemplateEdit, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResponseResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.editOrderTemplate(), params, headers, source)) as IOrderTemplateResponseResult
  }
  
  public async updateOrderTemplateFrequency(params: IOrderTemplateEditFrequency, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.updateOrderTemplateFrequency(), params, headers, source)) as IOrderTemplateResult
  }
  
  public async updateOrderTemplateSchedule(params: IOrderTemplateEditSchedule, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.updateOrderTemplateSchedule(), params, headers, source)) as IOrderTemplateResult
  }
  
  public async cancelOrderTemplate(params: IOrderTemplateCancelOrderTemplate, headers: IHeaders = {}, source: any = null): Promise<IOrderTemplateResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.cancelOrderTemplate(), params, headers, source)) as IOrderTemplateResult
  }
}
