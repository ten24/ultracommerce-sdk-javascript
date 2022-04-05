import { JsonApiDocument, JsonApiSingleResponse } from "./JsonApi";
import { ResultResponse } from "./ResultResponse";
export interface Sku extends JsonApiDocument {
    calculatedQATS: number;
    product_activeFlag: boolean;
    product_productType_productTypeName: string;
    imageFile: string;
    images: string[];
    skuName: string;
    skuFulfillmentMethods: any[];
    salePrice: number;
    skuID: string;
    product_brand_urlTitle: string;
    imagePath: string;
    skuOrderMaximumQuantity: string;
    activeFlag: boolean;
    skuDescription: string;
    skuOrderMinimumQuantity: string;
    product_productName: string;
    calculatedSkuDefinition: string;
    listPrice: number;
    options: any[];
    product_brand_brandName: string;
    publishedFlag: boolean;
    renewalPrice: number;
    product_urlTitle: string;
    product_productCode: string;
    skuCode: string;
    product_brand_imageFile: string;
}
export interface ISku extends JsonApiSingleResponse {
    data: Sku;
}
export interface ISkuResult extends ResultResponse<ISku> {
}
