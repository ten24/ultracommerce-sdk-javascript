import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi';
import { ResultResponse } from './ResultResponse';
export interface CategoryAttr extends JsonApiDocument {
    categoryID: string;
    categoryName: string;
    categoryDescription: string;
    allowProductAssignmentFlag: boolean;
    categoryNamePath: string;
    urlTitlePath: string;
    urlTitle: string;
    categoryIDPath: string;
    cmsCategoryID: string;
}
export interface ICategory extends JsonApiSingleResponse {
    data: CategoryAttr;
}
export interface ICategories extends JsonApiListResponse {
    data: CategoryAttr[];
}
export interface ICategoryResult extends ResultResponse<ICategory> {
}
export interface ICategoriesResult extends ResultResponse<ICategories> {
}
