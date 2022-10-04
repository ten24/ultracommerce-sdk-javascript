import { GET, POST } from '../constants'
import BaseEndpoint from '../BaseEndpoint'
import { IAccountResult } from '../interfaces/Account'
import { IQuery } from '../interfaces/Query'
import { Routes } from '../routes'
import {
  IAccountCreate,
  IAccountUpdate,
  IAccountChangePassword,
  IAccountForgotPassword,
  IAccountResetPassword,
  IAccountCreateGuestAccount,
  IAccountCreateGuestAccountPassword,
  IAccountVerifyEmailAddress,
  IAccountSendEmailVerificationLink,
  IAccountAddEmailAddress,
  IAccountSetPrimaryEmailAddress,
  IAccountDeleteEmailAddress,
  IAccountAddPhoneNumber,
  IAccountSetPrimaryPhoneNumber,
  IAccountDeletePhoneNumber,
  IAccountAddAddress,
  IAccountSetPrimaryAddress,
  IAccountUpdateAddress,
  IAccountDeleteAddress,
  IAccountAddPaymentMethod,
  IAccountDeletePaymentMethod,
  IAccountSetPrimaryPaymentMethod,
  IAccountOrders,
  IAccountCartsAndQuotes,
  IAccountOrderFulfillments,
  IAccountOrderDeliveries,
  IAccountGiftCards,
  IAccountSubscriptionUsage,
  IAccountImpersonation,
  IGiftCardAdd,
  IGiftCardUpdateStatus,
  IGiftCardTransactions,
} from '../interfaces/requests/index'
import { IHeaders } from '../SDKScope'

export default class Account extends BaseEndpoint {
  public async get(params: IQuery = {}, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getAccount(), params, headers, source)) as IAccountResult
  }

  public async create(params: IAccountCreate, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.createAccount(), params, headers, source)) as IAccountResult
  }

  public async update(params: IAccountUpdate, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.updateAccount(), params, headers, source)) as IAccountResult
  }

  public async changePassword(params: IAccountChangePassword, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.changePassword(), params, headers, source)) as IAccountResult
  }

  public async forgotPassword(params: IAccountForgotPassword, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.forgotPassword(), params, headers, source)) as IAccountResult
  }

  public async resetPassword(params: IAccountResetPassword, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.resetPassowrd(), params, headers, source)) as IAccountResult
  }

  public async createGuestAccount(params: IAccountCreateGuestAccount, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.createGuestAccount(), params, headers, source)) as IAccountResult
  }

  public async createGuestAccountPassword(params: IAccountCreateGuestAccountPassword, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.createGuestAccountPassword(), params, headers, source)) as IAccountResult
  }

  public async verifyEmailAddress(params: IAccountVerifyEmailAddress, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.verifyEmailAddress(), params, headers, source)) as IAccountResult
  }

  public async sendEmailVerificationLink(params: IAccountSendEmailVerificationLink, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.sendEmailVerificationLink(), params, headers, source)) as IAccountResult
  }

  public async addEmailAddress(params: IAccountAddEmailAddress, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addAccountEmailAddress(), params, headers, source)) as IAccountResult
  }

  public async setPrimaryEmailAddress(params: IAccountSetPrimaryEmailAddress, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.setPrimaryEmailAddress(), params, headers, source)) as IAccountResult
  }

  public async deleteEmailAddress(params: IAccountDeleteEmailAddress, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.deleteAccountEmailAddress(), params, headers, source)) as IAccountResult
  }

  public async addPhoneNumber(params: IAccountAddPhoneNumber, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addAccountPhoneNumber(), params, headers, source)) as IAccountResult
  }

  public async setPrimaryPhoneNumber(params: IAccountSetPrimaryPhoneNumber, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.setPrimaryAccountPhoneNumber(), params, headers, source)) as IAccountResult
  }

  public async deletePhoneNumber(params: IAccountDeletePhoneNumber, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.deleteAccountPhoneNumber(), params, headers, source)) as IAccountResult
  }

  public async addAddress(params: IAccountAddAddress, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addAccountAddress(), params, headers, source)) as IAccountResult
  }

  public async setPrimaryAddress(params: IAccountSetPrimaryAddress, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.setPrimaryAccountAddress(), params, headers, source)) as IAccountResult
  }

  public async updateAddress(params: IAccountUpdateAddress, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.updateAccountAddress(), params, headers, source)) as IAccountResult
  }

  public async deleteAddress(params: IAccountDeleteAddress, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.deleteAccountAddress(), params, headers, source)) as IAccountResult
  }

  public async deletePaymentMethod(params: IAccountDeletePaymentMethod, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.deleteAccountPaymentMethod(), params, headers, source)) as IAccountResult
  }

  public async sePrimaryPaymentMethod(params: IAccountSetPrimaryPaymentMethod, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.setPrimaryPaymentMethod(), params, headers, source)) as IAccountResult
  }

  public async updateSubscription(params: IAccountUpdateAddress, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.updateSubscriptionUsage(), params, headers, source)) as IAccountResult
  }

  public async addSubscriptionBenefitAccount(params: IAccountUpdateAddress, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addSubscriptionUsageBenefitAccount(), params, headers, source)) as IAccountResult
  }

  public async renewSubscriptionUsage(params: IAccountUpdateAddress, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.renewSubscriptionUsage(), params, headers, source)) as IAccountResult
  }

  public async toggleAutoRenewal(params: IAccountUpdate, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.switchAutoRenewal(), params, headers, source)) as IAccountResult
  }

  public async updateSubscriptionPaymentMethod(params: IAccountUpdateAddress, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.updateSubscriptionUsagePaymentMethod(), params, headers, source)) as IAccountResult
  }

  public async updateSubscriptionBillingAddress(params: IAccountUpdateAddress, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.updateSubscriptionBillingAddress(), params, headers, source)) as IAccountResult
  }

  public async updateSubscriptionShippingAddress(params: IAccountUpdateAddress, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.updateSubscriptionShippingAddress(), params, headers, source)) as IAccountResult
  }

  public async updateSubscriptionStatus(params: IAccountUpdateAddress, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.updateSubscriptionUsageStatus(), params, headers, source)) as IAccountResult
  }

  public async cancelSubscriptionUsage(params: IAccountUpdateAddress, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.cancelSubscriptionUsage(), params, headers, source)) as IAccountResult
  }

  public async addPaymentMethod(params: IAccountAddPaymentMethod, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addAccountPaymentMethod(), params, headers, source)) as IAccountResult
  }

  public async orders(params: IAccountOrders, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.getAccountOrders(), params, headers, source)) as IAccountResult
  }

  public async cartsAndQuotes(params: IAccountCartsAndQuotes, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.getAccountQuotes(), params, headers, source)) as IAccountResult
  }

  public async orderFulfillments(params: IAccountOrderFulfillments, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.getAccountOrderFulfillments(), params, headers, source)) as IAccountResult
  }

  public async orderDeliveries(params: IAccountOrderDeliveries, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.getAccountOrderDeliveries(), params, headers, source)) as IAccountResult
  }

  public async giftCards(params: IAccountGiftCards, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getGiftCardsOnAccount(), params, headers, source)) as IAccountResult
  }

  public async addGiftCard(params: IGiftCardAdd, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.addGiftCardToAccount(), params, headers, source)) as IAccountResult
  }

  public async updateGiftCardStatus(params: IGiftCardUpdateStatus, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.updateGiftCardStatus(), params, headers, source)) as IAccountResult
  }

  public async getGiftCardTransactions(params: IGiftCardTransactions, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getGiftCardTransactions(), params, headers, source)) as IAccountResult
  }

  public async subscriptionUsage(params: IAccountSubscriptionUsage, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.getSubscriptionUsage(), params, headers, source)) as IAccountResult
  }

  public async parentAccount(headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.getParentAccount(), {}, headers, source)) as IAccountResult
  }

  public async childAccounts(headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.getChildAccounts(), {}, headers, source)) as IAccountResult
  }

  public async impersonateAccount(params: IAccountImpersonation, headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.impersonateAccount(params), {}, headers, source)) as IAccountResult
  }

  public async endImpersonation(headers: IHeaders = {}, source: any = null): Promise<IAccountResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.endImpersonation(), {}, headers, source)) as IAccountResult
  }
}
