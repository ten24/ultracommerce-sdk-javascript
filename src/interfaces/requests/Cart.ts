export interface ICartClear {
  returnJSONObjects: string
}

export interface ICartUpdateNotes {
  orderNotes: string
}

export interface ICartAddItem {
  skuID: string
  quantity: number
  returnJSONObjects: string
  userDefinedPriceFlag: number
  price: string
  emailAddress: string
  giftMessage: string
}

export interface ICartAddItems {
  skuIDs: string
  returnJSONObjects: string
  quantities: number
}

export interface ICartUpdateItemQuantity {
  'orderItem.sku.skuID': string
  'orderItem.qty': number
  returnJSONObjects: string
  'orderItem.fulfillmentMethodID': string
}

export interface ICartRemoveItem {
  orderItemID: string
  orderItemIDList: string
  returnJSONObjects: string
}

export interface ICartAddProductBundleBuild {
  productBundleBuildID: string
}

export interface ICartAvailableShippingMethods {
  returnJSONObjects: string
}

export interface ICartSetPickupDate {
  orderFulfillmentID: string
  pickupDate: string
  returnJSONObjects: string
}

export interface ICartClearOrderFulfillment {
  orderFulfillmentID: string
  returnJSONObjects: string
}

export interface ICartAddShippingAddress {
  name: string
  company: string
  streetAddresss: string
  street2Address: string
  city: string
  stateCode: string
  postalCode: number
  countryCode: string
  fulfillmentID: string
  returnJSONObjects: string
  shippingMethodID: string
}

export interface ICartAddShippingAddressUsingAccountAddress {
  accountAddressID: string
  returnJSONObjects: string
  fulfillmentID: string
  shippingMethodID: string
}

export interface ICartAddBillingAddressUsingAccountAddress {
  accountAddressID: string
  returnJSONObjects: string
}

export interface ICartAddShippingMethod {
  shippingMethodID: string
  returnJSONObjects: string
}

export interface ICartAddPickupLocation {
  value: string
}

export interface ICartUpdateFulfillment {
  returnJSONObjects: string
  fulfillmentMethodID: string
  orderItemIDList: string
}

export interface ICartApplyPromoCode {
  promotionCode: string
  returnJSONObjects: string
}

export interface ICartRemovePromoCode {
  promotionCode: string
  promotionCodeID: string
  returnJSONObjects: string
}

export interface ICartAddBillingAddress {
  name: string
  company: string
  streetAddress: string
  street2Address: string
  city: string
  stateCode: string
  postalCode: string
  countryCode: string
  returnJSONObjects: string
}

export interface ICartAddPayment {
  //Using Credit Card
  'newOrderPayment.billingAddress.name': string
  'newOrderPayment.billingAddress.streetAddress': string
  'newOrderPayment.billingAddress.street2Address': string
  'newOrderPayment.billingAddress.city': string
  'newOrderPayment.billingAddress.statecode': string
  'newOrderPayment.billingAddress.postalcode': number
  'newOrderPayment.billingAddress.countrycode': string
  'newOrderPayment.nameOnCreditCard': string
  'newOrderPayment.creditCardNumber': string
  'newOrderPayment.expirationMonth': number
  'newOrderPayment.expirationYear': number
  'newOrderPayment.securityCode': number
  returnJSONObjects: string
  'newOrderPayment.requireBillingAddress': number

  // Using Gift Card
  'newOrderPayment.giftCardNumber': string
  'newOrderPayment.paymentMethod.paymentMethodID': string
}

export interface ICartRemovePayment {
  orderPaymentID: string
  returnJSONObjects: string
}

export interface ICartPlaceOrder {
  returnJSONObjects: string
}
