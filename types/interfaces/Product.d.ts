import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi';
import { ResultResponse } from './ResultResponse';
export interface ProductAttr extends JsonApiDocument {
    productID: string;
    productName: string;
    productCode: string;
    defaultSku_skuID: string;
    defaultSku_imageFile: string;
    defaultSku_price: number;
    defaultSku_listPrice: number;
    calculatedProductRating: number;
    calculatedQATS: number;
    activeFlag: boolean;
    brand_brandName: string;
    urlTitle: string;
    purchaseStartDateTime: string;
    images: any;
    productType_productTypeID: string;
    publishedFlag: boolean;
    categories: any;
    calculatedTitle: string;
    productDescription: string;
    brand_brandID: string;
    calculatedSalePrice: number;
    productType_productTypeName: string;
}
export interface IProduct extends JsonApiSingleResponse {
    data: ProductAttr;
}
export interface IProducts extends JsonApiListResponse {
    data: ProductAttr[];
}
export interface IProductResult extends ResultResponse<IProduct> {
}
export interface IProductsResult extends ResultResponse<IProducts> {
}
