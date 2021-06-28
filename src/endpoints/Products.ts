import BaseEndpoint from '../BaseEndpoint'
import { GET, POST } from '../constants'
import { parseParams } from '../helpers/parseParams'
import { IProductResult, IProductsResult } from '../interfaces/Product'
import { IProductFilterOptionsResult } from '../interfaces/ProductFilterOption'
import { IProductOptionGroupResult } from '../interfaces/ProductOptionGroup'
import { IQuery, productOptionGroup } from '../interfaces/Query'
import { IProductsGetFilterOptions, IProductsGetGallery, IProductsGetImagePaths, IProductsGetDetails, IProductsGetOptionsByOptionGroup, IProductsGetRelatedProducts, IProductsGetReviews, IProductsGetStock, IProductsGetBundles, IProductsCreateBundleBuild, IProductsGetBundleBuild, IProductsRemoveBundleBuild } from '../interfaces/requests/index'
import { Routes } from '../routes'
import { IHeaders } from '../SDKScope'

export default class Products extends BaseEndpoint {
  public async list(params: IQuery = {}, headers: IHeaders = {}, source: any = null): Promise<IProductsResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.listProduct(), parseParams(params), headers, source)) as IProductsResult
  }

  public async get(id: string, headers: IHeaders = {}, source: any = null): Promise<IProductResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getProduct(id), headers, source)) as IProductResult
  }

  public async getDetails(params: IProductsGetDetails, headers: IHeaders = {}, source: any = null): Promise<IProductResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.productDetailData(), params, headers, source)) as IProductResult
  }

  public async getSkuSelected(params: IProductsGetDetails, headers: IHeaders = {}, source: any = null): Promise<IProductResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.productSkuSelected(), params, headers, source)) as IProductResult
  }

  public async getSkuOptionDetails(params: IProductsGetDetails, headers: IHeaders = {}, source: any = null): Promise<IProductResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getSkuOptionDetails(), params, headers, source)) as IProductResult
  }

  public async search(params: any = {}, headers: IHeaders = {}, source: any = null): Promise<IProductsResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.productSearch(), params, headers, source)) as IProductsResult
  }

  public async getGallery(params: IProductsGetGallery, headers: IHeaders = {}, source: any = null): Promise<IProductsResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.getProductGallery(), params, headers, source)) as IProductsResult
  }

  public async getImagePaths(params: IProductsGetImagePaths, headers: IHeaders = {}, source: any = null): Promise<IProductsResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.getResizedImageByProfileName(), params, headers, source)) as IProductsResult
  }

  public async getOptionsByOptionGroup(params: IProductsGetOptionsByOptionGroup, headers: IHeaders = {}, source: any = null): Promise<IProductOptionGroupResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getProductOptionsByOptionGroup(), params, headers, source)) as IProductOptionGroupResult
  }

  public async getFilterOptions(params: IProductsGetFilterOptions, headers: IHeaders = {}, source: any = null): Promise<IProductFilterOptionsResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getProductFilterOptions(), params, headers, source)) as IProductFilterOptionsResult
  }

  public async listSku(params: IQuery = {}, headers: IHeaders = {}, source: any = null): Promise<IProductsResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.listSku(), parseParams(params), headers, source)) as IProductsResult
  }

  public async getSku(id: string, headers: IHeaders = {}, source: any = null): Promise<IProductResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getSku(id), headers, source)) as IProductResult
  }

  public async getRelatedProducts(params: IProductsGetRelatedProducts, headers: IHeaders = {}, source: any = null): Promise<IProductsResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.getRelatedProducts(), params, headers, source)) as IProductsResult
  }

  public async getReviews(params: IProductsGetReviews, headers: IHeaders = {}, source: any = null): Promise<IProductsResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.getProductReviews(), params, headers, source)) as IProductsResult
  }

  public async getStock(params: IProductsGetStock, headers: IHeaders = {}, source: any = null): Promise<IProductsResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.getSkuStock(), params, headers, source)) as IProductsResult
  }

  public async getBundles(params: IProductsGetBundles, headers: IHeaders = {}, source: any = null): Promise<IProductsResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.getProductBundles(), params, headers, source)) as IProductsResult
  }

  public async createBundleBuild(params: IProductsCreateBundleBuild, headers: IHeaders = {}, source: any = null): Promise<IProductsResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.createProductBundleBuild(), params, headers, source)) as IProductsResult
  }

  public async getBundleBuild(params: IProductsGetBundleBuild, headers: IHeaders = {}, source: any = null): Promise<IProductsResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.getProductBundleBuild(), params, headers, source)) as IProductsResult
  }

  public async removeBundleBuild(params: IProductsRemoveBundleBuild, headers: IHeaders = {}, source: any = null): Promise<IProductsResult> {
    return (await this.sdkScope.httpService.slatwallResponse(POST, Routes.removeProductBundleBuild(), params, headers, source)) as IProductsResult
  }
}
