export interface IQuery {
    filter?: {
        [key: string]: number | string;
    };
    page?: number;
    perPage?: number;
    sort?: string;
    sortOrder?: string;
}
export interface productOptionGroup {
    productID: string;
    optionGroupID: string;
}
