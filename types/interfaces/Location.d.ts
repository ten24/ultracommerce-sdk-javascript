import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi';
import { ResultResponse } from './ResultResponse';
export interface LocationAttr extends JsonApiDocument {
    locationID: string;
    locationName: string;
    locationCode: string;
    locationIDPath: string;
    activeFlag: boolean;
    currencyCode: string;
    calculatedLocationPathName: string;
}
export interface ILocation extends JsonApiSingleResponse {
    data: LocationAttr;
}
export interface ILocations extends JsonApiListResponse {
    data: LocationAttr[];
}
export interface ILocationResult extends ResultResponse<ILocation> {
}
export interface ILocationsResult extends ResultResponse<ILocations> {
}
