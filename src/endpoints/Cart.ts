import { GET, POST } from '../constants'
import BaseEndpoint from '../BaseEndpoint'
import { IOrderResult } from '../interfaces/Order'
import { IQuery } from '../interfaces/Query'
import { Routes } from '../routes'
import { ICartClear, ICartUpdateNotes, ICartAddItem, ICartAddItems, ICartUpdateItemQuantity, ICartRemoveItem, ICartAddProductBundleBuild, ICartAvailableShippingMethods, ICartAddShippingAddress, ICartAddShippingAddressUsingAccountAddress, ICartAddBillingAddressUsingAccountAddress, ICartAddShippingMethod, ICartAddPickupLocation, ICartUpdateFulfillment, ICartSetPickupDate, ICartClearOrderFulfillment, ICartApplyPromoCode, ICartRemovePromoCode, ICartAddBillingAddress, ICartAddPayment, ICartRemovePayment, ICartPlaceOrder } from '../interfaces/requests/index'
import { IHeaders } from '../SDKScope'

/* Note these should be kept in pairity with Quotes */
export default class Cart extends BaseEndpoint {
  public async get(params: IQuery = {}, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getCart(), params, headers, source)) as IOrderResult
  }

  public async updateNotes(params: ICartUpdateNotes, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.updateOrderNotes(), params, headers, source)) as IOrderResult
  }

  public async addItem(params: ICartAddItem, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addOrderItem(), params, headers, source)) as IOrderResult
  }

  public async addItems(params: ICartAddItems, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addOrderItems(), params, headers, source)) as IOrderResult
  }

  public async updateItemQuantity(params: ICartUpdateItemQuantity, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.updateOrderItemQuantity(), params, headers, source)) as IOrderResult
  }

  public async removeItem(params: ICartRemoveItem, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.removeOrderItem(), params, headers, source)) as IOrderResult
  }

  public async availableShippingMethods(params: ICartAvailableShippingMethods, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getAvailableShippingMethods(), params, headers, source)) as IOrderResult
  }

  public async eligibleFulfillmentMethods(params: IQuery = {}, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getEligibleFulfillmentMethods(), params, headers, source)) as IOrderResult
  }

  public async availablePaymentMethods(params: IQuery = {}, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getAvailablePaymentMethods(), params, headers, source)) as IOrderResult
  }

  public async setPickupDate(params: ICartSetPickupDate, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.setPickupDate(), params, headers, source)) as IOrderResult
  }

  public async clearOrderFulfillment(params: ICartClearOrderFulfillment, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.clearOrderFulfillment(), params, headers, source)) as IOrderResult
  }

  public async addShippingAddress(params: ICartAddShippingAddress, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addOrderShippingAddress(), params, headers, source)) as IOrderResult
  }

  public async addShippingAddressUsingAccountAddress(params: ICartAddShippingAddressUsingAccountAddress, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addOrderShippingAddressUsingAccountAddress(), params, headers, source)) as IOrderResult
  }

  public async addBillingAddressUsingAccountAddress(params: ICartAddBillingAddressUsingAccountAddress, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addOrderBillingAddressUsingAccountAddress(), params, headers, source)) as IOrderResult
  }

  public async addShippingMethod(params: ICartAddShippingMethod, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addShippingMethod(), params, headers, source)) as IOrderResult
  }

  public async addPickupLocation(params: ICartAddPickupLocation, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addPickupLocation(), params, headers, source)) as IOrderResult
  }

  public async updateFulfillment(params: ICartUpdateFulfillment, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.changeOrderFulfilment(), params, headers, source)) as IOrderResult
  }

  public async applyPromoCode(params: ICartApplyPromoCode, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addPromoCode(), params, headers, source)) as IOrderResult
  }

  public async removePromoCode(params: ICartRemovePromoCode, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.removePromoCode(), params, headers, source)) as IOrderResult
  }

  public async addBillingAddress(params: ICartAddBillingAddress, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addBillingAddress(), params, headers, source)) as IOrderResult
  }

  public async addNewAccountAndSetAsBillingAddress(params: any = {}, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addNewAccountAndSetAsBillingAddress(), params, headers, source)) as IOrderResult
  }

  public async addEditAccountAndSetAsBillingAddress(params: any = {}, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addEditAccountAndSetAsBillingAddress(), params, headers, source)) as IOrderResult
  }

  public async addNewAddressAndAttachAsShipping(params: any = {}, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addNewAddressAndAttachAsShipping(), params, headers, source)) as IOrderResult
  }

  public async addEditAddressAndAttachAsShipping(params: any = {}, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addEditAddressAndAttachAsShipping(), params, headers, source)) as IOrderResult
  }

  public async addPayment(params: ICartAddPayment, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addOrderPayment(), params, headers, source)) as IOrderResult
  }

  public async removePayment(params: ICartRemovePayment, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.removeOrderPayment(), params, headers, source)) as IOrderResult
  }

  public async placeOrder(params: ICartPlaceOrder, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.placeOrder(), params, headers, source)) as IOrderResult
  }

  public async clear(params: ICartClear, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.clearCart(), params, headers, source)) as IOrderResult
  }

  public async delete(params: IQuery = {}, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.deleteOrder(), params, headers, source)) as IOrderResult
  }

  /* Start Cart specific Functions */
  public async addCartToSession(params: any = {}, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addCartToSession(), params, headers, source)) as IOrderResult
  }

  public async getPayPalClientConfigForCart(headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getPayPalClientConfigForCart(), {}, headers, source)) as IOrderResult
  }

  public async createPayPalAccountPaymentMethod(params: IQuery = {}, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.createPayPalAccountPaymentMethod(), params, headers, source)) as IOrderResult
  }

  public async addProductBundleBuild(params: ICartAddProductBundleBuild, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addProductBundleToCart(), params, headers, source)) as IOrderResult
  }

  public async appliedPromotionCodes(params: IQuery = {}, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getAppliedPromotionCodes(), params, headers, source)) as IOrderResult
  }

  public async appliedPayments(params: IQuery = {}, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getAppliedPayments(), params, headers, source)) as IOrderResult
  }

  public async addGiftCardPayment(params: ICartAddPayment, headers: IHeaders = {}, source: any = null): Promise<IOrderResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addGiftCardOrderPayment(), params, headers, source)) as IOrderResult
  }
}
