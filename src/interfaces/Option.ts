import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { ResultResponse } from './ResultResponse'

export interface OptionAttr extends JsonApiDocument {
  optionID: string
  activeFlag: boolean
  optionDescription: string
  optionName: string
  optionCode: string
  sortOrder: string
}

export interface IOption extends JsonApiSingleResponse {
  data: OptionAttr
}

export interface IOptions extends JsonApiListResponse {
  data: OptionAttr[]
}

export interface IOptionResult extends ResultResponse<IOption> {}

export interface IOptionsResult extends ResultResponse<IOptions> {}
