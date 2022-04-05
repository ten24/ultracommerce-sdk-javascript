export interface IContentData {
  siteCode: String
  content: string
}

export interface IContentGetConfiguration {
  siteCode: String
}
export interface IContentByPage {
  urlTitle: String
  productUrlTitle: String
  includeHeader: boolean
  includeFooter: boolean
  includeAllCategory: boolean
  includeProductCategory: boolean
  includeAllProductType: boolean
  includeProductProductType: boolean
  includeAllBrand: boolean
  includeProductBrand: boolean
  includeCategories: boolean
  includeImages: boolean
  includeGlobalContent: boolean
}

export interface IVerifyRecaptcha {
  recaptchaToken: String
}
export interface IDownloadFile {
  fileID: String
}
