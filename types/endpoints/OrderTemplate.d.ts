import BaseEndpoint from '../BaseEndpoint';
import { IOrderTemplateResult, IOrderTemplatesResult } from '../interfaces/OrderTemplate';
import { IWishListShare, IWishListRemoveItem, IOrderTemplateCreate, IOrderTemplateCreateAndAddItem, IOrderTemplateGet, IOrderTemplateList, IOrderTemplateAddItem, IOrderTemplateRemoveItem, IOrderTemplateAddPromotionCode, IOrderTemplateRemovePromotionCode, IOrderTemplateGetAppliedPromotionCode } from '../interfaces/requests/OrderTemplate';
import { IHeaders } from '../SDKScope';
export default class OrderTemplate extends BaseEndpoint {
    create(params: IOrderTemplateCreate, headers?: IHeaders, source?: any): Promise<IOrderTemplateResult>;
    addItem(params: IOrderTemplateAddItem, headers?: IHeaders, source?: any): Promise<IOrderTemplateResult>;
    createAndAddItem(params: IOrderTemplateCreateAndAddItem, headers?: IHeaders, source?: any): Promise<IOrderTemplateResult>;
    removeItem(params: IOrderTemplateRemoveItem, headers?: IHeaders, source?: any): Promise<IOrderTemplateResult>;
    addPromotionCode(params: IOrderTemplateAddPromotionCode, headers?: IHeaders, source?: any): Promise<IOrderTemplateResult>;
    removePromotionCode(params: IOrderTemplateRemovePromotionCode, headers?: IHeaders, source?: any): Promise<IOrderTemplateResult>;
    getAppliedPromotionCodes(params: IOrderTemplateGet, headers?: IHeaders, source?: any): Promise<IOrderTemplateResult>;
    getPromotionProducts(params: IOrderTemplateGetAppliedPromotionCode, headers?: IHeaders, source?: any): Promise<IOrderTemplateResult>;
    removePromotionItems(params: IOrderTemplateGetAppliedPromotionCode, headers?: IHeaders, source?: any): Promise<IOrderTemplateResult>;
    list(params: IOrderTemplateList, headers?: IHeaders, source?: any): Promise<IOrderTemplatesResult>;
    createWishlist(params: IOrderTemplateCreate, headers?: IHeaders, source?: any): Promise<IOrderTemplateResult>;
    addWishlistItem(params: IOrderTemplateAddItem, headers?: IHeaders, source?: any): Promise<IOrderTemplateResult>;
    addWishlistItemAndGetWishList(params: IOrderTemplateAddItem, headers?: IHeaders, source?: any): Promise<IOrderTemplateResult>;
    removeWishlistItem(params: IWishListRemoveItem, headers?: IHeaders, source?: any): Promise<IOrderTemplateResult>;
    removeWishlistItemAndGetWishList(params: IWishListRemoveItem, headers?: IHeaders, source?: any): Promise<IOrderTemplateResult>;
    shareWishlist(params: IWishListShare, headers?: IHeaders, source?: any): Promise<IOrderTemplateResult>;
    getWishlists(headers?: IHeaders, source?: any): Promise<IOrderTemplateResult>;
    getWishListItems(headers?: IHeaders, source?: any): Promise<IOrderTemplatesResult>;
}
