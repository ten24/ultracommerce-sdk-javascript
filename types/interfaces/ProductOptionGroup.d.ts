import { JsonApiDocument, JsonApiListResponse } from './JsonApi';
import { ResultResponse } from './ResultResponse';
export interface ProductOptionGroupAttr extends JsonApiDocument {
    optionName: string;
    optionCode: string;
    optionID: string;
}
export interface IProductOptionGroup extends JsonApiListResponse {
    data: ProductOptionGroupAttr[];
}
export interface IProductOptionGroupResult extends ResultResponse<IProductOptionGroup> {
}
