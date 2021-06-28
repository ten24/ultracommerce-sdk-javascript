import BaseEndpoint from '../BaseEndpoint';
import { ILocationResult, ILocationsResult } from '../interfaces/Location';
import { IQuery } from '../interfaces/Query';
import { IHeaders } from '../SDKScope';
export default class Option extends BaseEndpoint {
    list(params?: IQuery, headers?: IHeaders, source?: any): Promise<ILocationsResult>;
    get(id: string, headers?: IHeaders, source?: any): Promise<ILocationResult>;
    getPickupLocations(headers?: IHeaders, source?: any): Promise<ILocationsResult>;
    countries(headers?: IHeaders, source?: any): Promise<ILocationsResult>;
    states(params: {
        countryCode: string;
    }, headers?: IHeaders, source?: any): Promise<ILocationsResult>;
    addressOptions(params: {}, headers?: IHeaders, source?: any): Promise<ILocationsResult>;
}
