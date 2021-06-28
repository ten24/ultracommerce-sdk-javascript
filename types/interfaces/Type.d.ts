import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi';
import { ResultResponse } from './ResultResponse';
export interface TypeAttr extends JsonApiDocument {
    typeCode: string;
}
export interface IType extends JsonApiSingleResponse {
    data: TypeAttr;
}
export interface ITypes extends JsonApiListResponse {
    data: TypeAttr[];
}
export interface ITypeResult extends ResultResponse<IType> {
}
export interface ITypesResult extends ResultResponse<ITypes> {
}
