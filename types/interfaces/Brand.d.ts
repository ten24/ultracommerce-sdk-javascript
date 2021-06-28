import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi';
import { ResultResponse } from './ResultResponse';
export interface BrandAttr extends JsonApiDocument {
    brandID: string;
    brandName: string;
    brandWebsite: string;
    activeFlag: boolean;
    urlTitle: string;
    publishedFlag: boolean;
}
export interface IBrand extends JsonApiSingleResponse {
    data: BrandAttr;
}
export interface IBrands extends JsonApiListResponse {
    data: BrandAttr[];
}
export interface IBrandResult extends ResultResponse<IBrand> {
}
export interface IBrandsResult extends ResultResponse<IBrands> {
}
