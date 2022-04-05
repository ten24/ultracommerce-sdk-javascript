import BaseEndpoint from '../BaseEndpoint';
import { IProductResult, IProductsResult } from '../interfaces/Product';
import { IProductFilterOptionsResult } from '../interfaces/ProductFilterOption';
import { IProductOptionGroupResult } from '../interfaces/ProductOptionGroup';
import { IQuery } from '../interfaces/Query';
import { IProductsGetFilterOptions, IProductsGetGallery, IProductsGetImagePaths, IProductsGetDetails, IProductsGetOptionsByOptionGroup, IProductsGetRelatedProducts, IProductsGetReviews, IProductsGetStock, IProductsGetBundles, IProductsCreateBundleBuild, IProductsGetBundleBuild, IProductsRemoveBundleBuild } from '../interfaces/requests/index';
import { ISkuResult } from '../interfaces/Sku';
import { IHeaders } from '../SDKScope';
export default class Products extends BaseEndpoint {
    list(params?: IQuery, headers?: IHeaders, source?: any): Promise<IProductsResult>;
    get(id: string, headers?: IHeaders, source?: any): Promise<IProductResult>;
    getDetails(params: IProductsGetDetails, headers?: IHeaders, source?: any): Promise<IProductResult>;
    getSkuSelected(params: IProductsGetDetails, headers?: IHeaders, source?: any): Promise<IProductResult>;
    getSkuOptionDetails(params: IProductsGetDetails, headers?: IHeaders, source?: any): Promise<IProductResult>;
    search(params?: any, headers?: IHeaders, source?: any): Promise<IProductsResult>;
    getGallery(params: IProductsGetGallery, headers?: IHeaders, source?: any): Promise<IProductsResult>;
    getImagePaths(params: IProductsGetImagePaths, headers?: IHeaders, source?: any): Promise<IProductsResult>;
    getOptionsByOptionGroup(params: IProductsGetOptionsByOptionGroup, headers?: IHeaders, source?: any): Promise<IProductOptionGroupResult>;
    getFilterOptions(params: IProductsGetFilterOptions, headers?: IHeaders, source?: any): Promise<IProductFilterOptionsResult>;
    listSku(params?: IQuery, headers?: IHeaders, source?: any): Promise<IProductsResult>;
    getSku(id: string, headers?: IHeaders, source?: any): Promise<ISkuResult>;
    getRelatedProducts(params: IProductsGetRelatedProducts, headers?: IHeaders, source?: any): Promise<IProductsResult>;
    getReviews(params: IProductsGetReviews, headers?: IHeaders, source?: any): Promise<IProductsResult>;
    getStock(params: IProductsGetStock, headers?: IHeaders, source?: any): Promise<IProductsResult>;
    getBundles(params: IProductsGetBundles, headers?: IHeaders, source?: any): Promise<IProductsResult>;
    createBundleBuild(params: IProductsCreateBundleBuild, headers?: IHeaders, source?: any): Promise<IProductsResult>;
    getBundleBuild(params: IProductsGetBundleBuild, headers?: IHeaders, source?: any): Promise<IProductsResult>;
    removeBundleBuild(params: IProductsRemoveBundleBuild, headers?: IHeaders, source?: any): Promise<IProductsResult>;
}
