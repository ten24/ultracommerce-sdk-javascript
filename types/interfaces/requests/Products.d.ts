export interface IProductsGetGallery {
    productID: string;
}
export interface IProductsGetImagePaths {
    skuIDs: string;
    profileName: string;
}
export interface IProductsGetDetails {
    productID: string;
    selectedOptionIDList: string;
}
export interface IProductsGetOptionsByOptionGroup {
    productID: string;
    optionGroupID: string;
}
export interface IProductsGetFilterOptions {
    allowProductAssignmentFlag: boolean;
    activeFlag: boolean;
}
export interface IProductsGetRelatedProducts {
    productID: string;
}
export interface IProductsGetReviews {
    productID: string;
}
export interface IProductsGetStock {
    skuID: string;
    locationID: string;
}
export interface IProductsGetBundles {
    productID: string;
    currentPage?: string;
    pageRecordsShow?: string;
}
export interface IProductsCreateBundleBuild {
    skuIDList: string;
    quantities: string;
    productBundleGroupID: string;
    defaultSkuID: string;
}
export interface IProductsGetBundleBuild {
    skuID: string;
}
export interface IProductsRemoveBundleBuild {
    productBundleBuildID: string;
}
export interface IProductsAddReview {
    newProductReview: IProductsAddReviewNewProduct;
}
export interface IProductsAddReviewNewProduct {
    product: IProductsAddReviewNewProductID;
    rating: number;
    review: string;
    reviewTitle: string;
    reviewerName: string;
}
export interface IProductsAddReviewNewProductID {
    productID: string;
}
