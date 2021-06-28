import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi';
import { ResultResponse } from './ResultResponse';

export interface OrderTemplateAttr extends JsonApiDocument {
    orderTemplateName: string,
    currencyCode: string,
    siteID: string
}

export interface IOrderTemplate extends JsonApiSingleResponse {
    data: OrderTemplateAttr;
}

export interface IOrderTemplates extends JsonApiListResponse {
    data: OrderTemplateAttr[];
}

export interface IOrderTemplateResult extends ResultResponse<IOrderTemplate> {}

export interface IOrderTemplatesResult extends ResultResponse<IOrderTemplates> {}