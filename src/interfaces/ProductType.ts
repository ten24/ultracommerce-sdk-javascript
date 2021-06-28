import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi';
import { ResultResponse } from './ResultResponse';

export interface ProductTypeAttr extends JsonApiDocument {
  productTypeID: string;
  productTypeName: string;
  systemCode: string;
  productTypeNamePath: string;
  productTypeIDPath: string;
  productTypeDescription: string;
  activeFlag: boolean;
  urlTitle: string;
  publishedFlag: boolean;
}

export interface IProductType extends JsonApiSingleResponse {
  data: ProductTypeAttr;
}

export interface IProductTypes extends JsonApiListResponse {
  data: ProductTypeAttr[];
}

export interface IProductTypeResult extends ResultResponse<IProductType> {}

export interface IProductTypesResult extends ResultResponse<IProductTypes> {}
