export interface IAccountCreate {
    organizationFlag: string;
    parentAccountID: string;
    ownerAccountID: string;
    childAccountID: string;
    returnJSONObjects: string;
}
export interface IAccountUpdate {
    emailAddress: string;
    firstName: string;
    lastName: string;
    company: string;
    returnJSONObjects: string;
}
export interface IAccountChangePassword {
    password: string;
    passwordConfirm: string;
    returnJSONObjects: string;
}
export interface IAccountForgotPassword {
    emailAddress: string;
    returnJSONObjects: string;
}
export interface IAccountResetPassword {
    password: string;
    passwordConfirm: string;
    swprid: string;
}
export interface IAccountCreateGuestAccount {
    firstName: string;
    lastName: string;
    returnJSONObjects: string;
}
export interface IAccountCreateGuestAccountPassword {
    orderID: string;
    accountID: string;
    password: string;
    passwordConfirm: string;
    returnJSONObjects: string;
}
export interface IAccountVerifyEmailAddress {
    accountEmailAddressID: string;
    returnJSONObjects: string;
}
export interface IAccountSendEmailVerificationLink {
    accountEmailAddressID: string;
    returnJSONObjects: string;
}
export interface IAccountAddEmailAddress {
    emailAddress: string;
    emailAddressConfirm: string;
    returnJSONObjects: string;
}
export interface IAccountSetPrimaryEmailAddress {
    accountEmailAddressID: string;
}
export interface IAccountDeleteEmailAddress {
    accountEmailAddressID: string;
    returnJSONObjects: string;
}
export interface IAccountAddPhoneNumber {
    phoneNumber: string;
    returnJSONObjects: string;
}
export interface IAccountSetPrimaryPhoneNumber {
    accountPhoneNumberID: string;
}
export interface IAccountDeletePhoneNumber {
    accountPhoneNumberID: string;
    returnJSONObjects: string;
}
export interface IAccountAddAddress {
    accountAddressName: string;
    name: string;
    company: string;
    streetAddress: string;
    street2Address: string;
    city: string;
    stateCode: string;
    postalCode: string;
    countryCode: string;
    returnJSONObjects: string;
}
export interface IAccountSetPrimaryAddress {
    accountAddressID: string;
}
export interface IAccountUpdateAddress {
    accountAddressID: string;
    name: string;
    company: string;
    streetAddress: string;
    street2Address: string;
    city: string;
    stateCode: string;
    postalCode: string;
    countryCode: string;
    returnJSONObjects: string;
}
export interface IAccountDeleteAddress {
    accountAddressID: string;
    returnJSONObjects: string;
}
export interface IAccountAddPaymentMethod {
    nameOnCreditCard: string;
    creditCardNumber: number;
    expirationMonth: number;
    expirationYear: number;
    securityCode: number;
    accountPaymentMethodName: string;
    returnJSONObjects: string;
}
export interface IAccountDeletePaymentMethod {
    accountPaymentMethodID: string;
    returnJSONObjects: string;
}
export interface IAccountSetPrimaryPaymentMethod {
    accountPaymentMethodID: string;
}
export interface IAccountOrders {
    accountID: string;
    returnJSONObjects: string;
    pageRecordsShow: number;
    currentPage: number;
}
export interface IAccountCartsAndQuotes {
    accountID: string;
    returnJSONObjects: string;
    pageRecordsShow: number;
    currentPage: number;
}
export interface IAccountOrderFulfillments {
    returnJSONObjects: string;
    pageRecordsShow: number;
    currentPage: number;
}
export interface IAccountOrderDeliveries {
    returnJSONObjects: string;
    pageRecordsShow: number;
    currentPage: number;
}
export interface IAccountGiftCards {
    returnJSONObjects: string;
    pageRecordsShow: number;
    currentPage: number;
}
export interface IAccountSubscriptionUsage {
    returnJSONObjects: string;
    pageRecordsShow: number;
    currentPage: number;
}
