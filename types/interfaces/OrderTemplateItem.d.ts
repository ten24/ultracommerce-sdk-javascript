import { JsonApiDocument, JsonApiListResponse } from './JsonApi';
import { ResultResponse } from './ResultResponse';
export interface OrderTemplateItemAttr extends JsonApiDocument {
    calculatedTotal: string;
    imageFile: string;
    imagePath: string;
    listPrice: number;
    orderTemplateItemID: string;
    quantity: number;
    renewalPrice: string;
    salePrice: string;
    skuFulfillmentMethods: object;
    images: object;
    skuID: string;
    skuOrderMaximumQuantity: string;
    skuOrderMinimumQuantity: string;
    orderTemplateName: string;
    scheduleOrderDayOfTheMonth: number;
    scheduleOrderNextPlaceDateTime: string;
}
export interface IOrderTemplateItem extends JsonApiListResponse {
    data: OrderTemplateItemAttr[];
}
export interface IOrderTemplateResult extends ResultResponse<IOrderTemplateItem> {
}
