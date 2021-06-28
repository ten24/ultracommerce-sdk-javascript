import BaseEndpoint from '../BaseEndpoint';
import { IAccountResult } from '../interfaces/Account';
import { IQuery } from '../interfaces/Query';
import { IAccountCreate, IAccountUpdate, IAccountChangePassword, IAccountForgotPassword, IAccountResetPassword, IAccountCreateGuestAccount, IAccountCreateGuestAccountPassword, IAccountVerifyEmailAddress, IAccountSendEmailVerificationLink, IAccountAddEmailAddress, IAccountSetPrimaryEmailAddress, IAccountDeleteEmailAddress, IAccountAddPhoneNumber, IAccountSetPrimaryPhoneNumber, IAccountDeletePhoneNumber, IAccountAddAddress, IAccountSetPrimaryAddress, IAccountUpdateAddress, IAccountDeleteAddress, IAccountAddPaymentMethod, IAccountDeletePaymentMethod, IAccountSetPrimaryPaymentMethod, IAccountOrders, IAccountCartsAndQuotes, IAccountOrderFulfillments, IAccountOrderDeliveries, IAccountGiftCards, IAccountSubscriptionUsage } from '../interfaces/requests/index';
import { IHeaders } from '../SDKScope';
export default class Account extends BaseEndpoint {
    get(params?: IQuery, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    create(params: IAccountCreate, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    update(params: IAccountUpdate, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    changePassword(params: IAccountChangePassword, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    forgotPassword(params: IAccountForgotPassword, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    resetPassword(params: IAccountResetPassword, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    createGuestAccount(params: IAccountCreateGuestAccount, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    createGuestAccountPassword(params: IAccountCreateGuestAccountPassword, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    verifyEmailAddress(params: IAccountVerifyEmailAddress, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    sendEmailVerificationLink(params: IAccountSendEmailVerificationLink, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    addEmailAddress(params: IAccountAddEmailAddress, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    setPrimaryEmailAddress(params: IAccountSetPrimaryEmailAddress, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    deleteEmailAddress(params: IAccountDeleteEmailAddress, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    addPhoneNumber(params: IAccountAddPhoneNumber, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    setPrimaryPhoneNumber(params: IAccountSetPrimaryPhoneNumber, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    deletePhoneNumber(params: IAccountDeletePhoneNumber, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    addAddress(params: IAccountAddAddress, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    setPrimaryAddress(params: IAccountSetPrimaryAddress, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    updateAddress(params: IAccountUpdateAddress, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    deleteAddress(params: IAccountDeleteAddress, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    addPaymentMethod(params: IAccountAddPaymentMethod, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    deletePaymentMethod(params: IAccountDeletePaymentMethod, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    sePrimaryPaymentMethod(params: IAccountSetPrimaryPaymentMethod, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    orders(params: IAccountOrders, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    cartsAndQuotes(params: IAccountCartsAndQuotes, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    orderFulfillments(params: IAccountOrderFulfillments, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    orderDeliveries(params: IAccountOrderDeliveries, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    giftCards(params: IAccountGiftCards, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    subscriptionUsage(params: IAccountSubscriptionUsage, headers?: IHeaders, source?: any): Promise<IAccountResult>;
    parentAccount(headers?: IHeaders, source?: any): Promise<IAccountResult>;
    childAccounts(headers?: IHeaders, source?: any): Promise<IAccountResult>;
}
