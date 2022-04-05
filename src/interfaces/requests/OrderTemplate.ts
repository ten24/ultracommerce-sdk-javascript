export interface IOrderTemplateCreate {
  orderTemplateName: string
  currencyCode: string
  siteID: string
  frequencyTermID?: string
  orderTemplateSystemCode?: string
  scheduleOrderDayOfTheMonth?: number
}

export interface IOrderTemplateAddItem {
  orderTemplateID: string
  skuID: string
  quantity?: number
}

export interface IOrderTemplateCreateAndAddItem {
  orderTemplateName: string
  skuID: string
  currencyCode: string
  siteID: number
}

export interface IOrderTemplateRemoveItem {
  orderTemplateItemID: string
}

export interface IOrderTemplateAddPromotionCode {
  orderTemplateID: string
  promotionCode: string
  returnAppliedPromotionCodes?: boolean
}

export interface IOrderTemplateGetAppliedPromotionCode {
  orderTemplateID: string
}

export interface IOrderTemplateRemovePromotionCode {
  rderTemplateID: string
  promotionCodeID: string
  returnAppliedPromotionCodes?: boolean
}

export interface IWishListRemoveItem {
  orderTemplateID: string
  removalSkuID: string
}

export interface IOrderTemplateList {
  orderTemplateID?: string
  orderTemplateTypeID?: string
  optionalProperties?: string
  currentPage?: string
  pageRecordsShow?: string
}

export interface IOrderTemplateGet {
  orderTemplateID: string
  orderTemplateTypeID?: string
  optionalProperties?: string
  currentPage?: string
  pageRecordsShow?: string
}

export interface IWishListShare {
  orderTemplateID: string
  receiverEmailAddress: string
}
