import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi';
import { ResultResponse } from './ResultResponse';
import { OrderTemplateItemAttr } from './OrderTemplateItem';

export interface OrderTemplateAttr extends JsonApiDocument {
  orderTemplateName: string
  currencyCode: string
  siteID: string
}

export interface OrderTemplateAttributes extends JsonApiDocument {
    calculatedDiscountTotal: number,
    calculatedFulfillmentHandlingFeeTotal: number,
    calculatedFulfillmentTotal: number,
    calculatedOrderTemplateItemsCount: number,
    calculatedSubTotal: number,
    calculatedTaxTotal:number,
    calculatedTotal: number,
    createdDateTime: string,
    currencyCode: string,
    orderTemplateID : string,
    orderTemplateItems : OrderTemplateItemAttr[],
    orderTemplateName:string,
    scheduleOrderDayOfTheMonth : number,
    scheduleOrderNextPlaceDateTime : string
}

export interface IOrderTemplate extends JsonApiSingleResponse {
  data: OrderTemplateAttr
}

export interface IOrderTemplates extends JsonApiListResponse {
  data: OrderTemplateAttr[]
}

export interface IOrderTemplateResponse extends JsonApiListResponse {
    data: OrderTemplateAttributes[];
}

export interface IOrderTemplateResult extends ResultResponse<IOrderTemplate> {}

export interface IOrderTemplatesResult extends ResultResponse<IOrderTemplates> {}

export interface IOrderTemplateResponseResult extends ResultResponse<IOrderTemplateResponse> {}

