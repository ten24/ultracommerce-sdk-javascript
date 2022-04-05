import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { ResultResponse } from './ResultResponse'

export interface ProductFilterOptionAttr extends JsonApiDocument {
  importRemoteID: string
  optionCode: string
  optionDescription: string
  sortOrder: number
  optionID: string
  optionName: string
  activeFlag: boolean
}

export interface IProductFilterOption extends JsonApiListResponse {
  data: ProductFilterOptionAttr[]
}

export interface IProductFilterOptionsResult extends ResultResponse<IProductFilterOption> {}
