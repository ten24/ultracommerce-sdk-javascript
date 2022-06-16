import { GET, POST } from '../constants'
import BaseEndpoint from '../BaseEndpoint'
import { IQuotesResult } from '../interfaces/Quote'
import { IQuery } from '../interfaces/Query'
import { Routes } from '../routes'
import { IHeaders } from '../SDKScope'
import { IGetQuote, ICreateQuote, IAddQuoteItem, IUpdateQuoteItemQuantity, IQuoteShippingAddress, IQuoteSubmitForApproval, IQuoteSetPickupDate, IQuoteClearOrderFulfillment, IQuoteNotes, IQuoteAddShippingAddressUsingAccountAddress, IQuoteAddBillingAddressUsingAccountAddress, IQuoteAddShippingMethod, IQuoteAddPayment, IQuoteRemovePayment, IQuotePlaceOrder, IQuoteAddBillingAddress, IQuoteRemovePromoCode, IQuoteApplyPromoCode, IQuoteUpdateFulfillment, IQuoteAddPickupLocation, IRemoveQuoteItem, IQuoteUpdate } from '../interfaces/requests/Quote'

/* Note these should be kept in pairity with Cart */
export default class Quotes extends BaseEndpoint {
  public async get(params: IGetQuote, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getQuote(), params, headers, source)) as IQuotesResult
  }

  public async updateNotes(params: IQuoteNotes, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.updateOrderNotes(), params, headers, source)) as IQuotesResult
  }

  public async addItem(params: IAddQuoteItem, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addOrderItem(), params, headers, source)) as IQuotesResult
  }

  public async addItems(params: IAddQuoteItem, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addOrderItems(), params, headers, source)) as IQuotesResult
  }

  public async updateItemQuantity(params: IUpdateQuoteItemQuantity, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.updateOrderItemQuantity(), params, headers, source)) as IQuotesResult
  }

  public async removeItem(params: IRemoveQuoteItem, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.removeOrderItem(), params, headers, source)) as IQuotesResult
  }

  public async availableShippingMethods(params: IQuery = {}, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getAvailableShippingMethods(), params, headers, source)) as IQuotesResult
  }

  public async eligibleFulfillmentMethods(params: IGetQuote, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getEligibleFulfillmentMethods(), params, headers, source)) as IQuotesResult
  }

  public async availablePaymentMethods(params: IQuery = {}, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getAvailablePaymentMethods(), params, headers, source)) as IQuotesResult
  }

  public async setPickupDate(params: IQuoteSetPickupDate, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.setPickupDate(), params, headers, source)) as IQuotesResult
  }

  public async clearOrderFulfillment(params: IQuoteClearOrderFulfillment, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.clearOrderFulfillment(), params, headers, source)) as IQuotesResult
  }

  public async addShippingAddress(params: IQuoteShippingAddress, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addOrderShippingAddress(), params, headers, source)) as IQuotesResult
  }

  public async addShippingAddressUsingAccountAddress(params: IQuoteAddShippingAddressUsingAccountAddress, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addOrderShippingAddressUsingAccountAddress(), params, headers, source)) as IQuotesResult
  }

  public async addBillingAddressUsingAccountAddress(params: IQuoteAddBillingAddressUsingAccountAddress, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addOrderBillingAddressUsingAccountAddress(), params, headers, source)) as IQuotesResult
  }

  public async addShippingMethod(params: IQuoteAddShippingMethod, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addShippingMethod(), params, headers, source)) as IQuotesResult
  }

  public async addPickupLocation(params: IQuoteAddPickupLocation, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addPickupLocation(), params, headers, source)) as IQuotesResult
  }

  public async updateFulfillment(params: IQuoteUpdateFulfillment, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.changeOrderFulfilment(), params, headers, source)) as IQuotesResult
  }

  public async applyPromoCode(params: IQuoteApplyPromoCode, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addPromoCode(), params, headers, source)) as IQuotesResult
  }

  public async removePromoCode(params: IQuoteRemovePromoCode, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.removePromoCode(), params, headers, source)) as IQuotesResult
  }

  public async addBillingAddress(params: IQuoteAddBillingAddress, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addBillingAddress(), params, headers, source)) as IQuotesResult
  }

  public async addNewAccountAndSetAsBillingAddress(params: any = {}, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addNewAccountAndSetAsBillingAddress(), params, headers, source)) as IQuotesResult
  }

  public async addEditAccountAndSetAsBillingAddress(params: any = {}, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addEditAccountAndSetAsBillingAddress(), params, headers, source)) as IQuotesResult
  }

  public async addNewAddressAndAttachAsShipping(params: any = {}, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addNewAddressAndAttachAsShipping(), params, headers, source)) as IQuotesResult
  }

  public async addEditAddressAndAttachAsShipping(params: any = {}, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addEditAddressAndAttachAsShipping(), params, headers, source)) as IQuotesResult
  }

  public async addPayment(params: IQuoteAddPayment, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addOrderPayment(), params, headers, source)) as IQuotesResult
  }

  public async removePayment(params: IQuoteRemovePayment, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.removeOrderPayment(), params, headers, source)) as IQuotesResult
  }

  public async placeOrder(params: IQuotePlaceOrder, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.placeOrder(), params, headers, source)) as IQuotesResult
  }

  public async clear(params: IQuery = {}, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.clearCart(), params, headers, source)) as IQuotesResult
  }

  public async delete(params: IGetQuote, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.deleteOrder(), params, headers, source)) as IQuotesResult
  }

  /* Start Quote specific Functions */
  public async list(params: IQuery = {}, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getQuotes(), params, headers, source)) as IQuotesResult
  }

  public async createQuote(params: ICreateQuote, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.createQuote(), params, headers, source)) as IQuotesResult
  }

  public async updateQuote(params: IQuoteUpdate, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.updateQuote(), params, headers, source)) as IQuotesResult
  }

  public async convertCartToQuote(params: IQuery = {}, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.convertCartToQuote(), params, headers, source)) as IQuotesResult
  }

  public async submitQuoteForApproval(params: IQuoteSubmitForApproval, headers: IHeaders = {}, source: any = null): Promise<IQuotesResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.submitQuoteForApproval(), params, headers, source)) as IQuotesResult
  }
}
