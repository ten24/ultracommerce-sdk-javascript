export interface IGetQuote {
    orderID: string;
}
export interface ICreateQuote {
    quoteName: string;
}
export interface IAddQuoteItem {
    skuCode: string;
    orderID: string;
}
export interface IRemoveQuoteItem {
    orderID: string;
    orderItemID: string;
    returnQuote: boolean;
}
export interface IUpdateQuoteItemQuantity {
    orderID: string;
    orderItemID: string;
    quantity: number;
}
export interface IQuoteShippingAddress {
    name: string;
    company: string;
    streetAddress: string;
    street2Address: string;
    city: string;
    stateCode: string;
    postalCode: string;
    countryCode: string;
    fulfillmentID: string;
    orderID: string;
}
export interface IQuoteAddShippingAddressUsingAccountAddress {
    accountAddressID: string;
    returnQuote: boolean;
    fulfillmentID: string;
    shippingMethodID: string;
}
export interface IQuoteAddBillingAddressUsingAccountAddress {
    accountAddressID: string;
    returnQuote: boolean;
}
export interface IQuoteAddShippingMethod {
    shippingMethodID: string;
    returnQuote: boolean;
}
export interface IQuoteSubmitForApproval {
    orderID: string;
    reason: string;
    returnQuote: boolean;
    orderStatusTypeCode: string;
}
export interface IQuoteNotes {
    orderNotes: string;
    orderID: string;
}
export interface IQuoteSetPickupDate {
    orderFulfillmentID: string;
    pickupDate: string;
    returnQuote: boolean;
}
export interface IQuoteClearOrderFulfillment {
    orderFulfillmentID: string;
    returnQuote: boolean;
}
export interface IQuoteAddPickupLocation {
    value: string;
}
export interface IQuoteUpdateFulfillment {
    returnQuote: boolean;
    fulfillmentMethodID: string;
    orderItemIDList: string;
}
export interface IQuoteApplyPromoCode {
    promotionCode: string;
    returnQuote: boolean;
}
export interface IQuoteRemovePromoCode {
    promotionCode: string;
    promotionCodeID: string;
    returnQuote: boolean;
}
export interface IQuoteAddBillingAddress {
    name: string;
    company: string;
    streetAddress: string;
    street2Address: string;
    city: string;
    stateCode: string;
    postalCode: string;
    countryCode: string;
    returnQuote: boolean;
}
export interface IQuoteAddPayment {
    'newOrderPayment.billingAddress.name': string;
    'newOrderPayment.billingAddress.streetAddress': string;
    'newOrderPayment.billingAddress.street2Address': string;
    'newOrderPayment.billingAddress.city': string;
    'newOrderPayment.billingAddress.statecode': string;
    'newOrderPayment.billingAddress.postalcode': number;
    'newOrderPayment.billingAddress.countrycode': string;
    'newOrderPayment.nameOnCreditCard': string;
    'newOrderPayment.creditCardNumber': string;
    'newOrderPayment.expirationMonth': number;
    'newOrderPayment.expirationYear': number;
    'newOrderPayment.securityCode': number;
    returnQuote: boolean;
    'newOrderPayment.requireBillingAddress': number;
    'newOrderPayment.giftCardNumber': string;
    'newOrderPayment.paymentMethod.paymentMethodID': string;
}
export interface IQuoteRemovePayment {
    orderPaymentID: string;
    returnQuote: boolean;
}
export interface IQuotePlaceOrder {
    returnQuote: boolean;
}
export interface IQuoteUpdate {
    orderID: string;
    returnQuote: boolean;
}
