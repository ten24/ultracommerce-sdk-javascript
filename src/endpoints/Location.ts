import { GET } from '../constants'
import BaseEndpoint from '../BaseEndpoint'
import { ILocationResult, ILocationsResult } from '../interfaces/Location'
import { IQuery } from '../interfaces/Query'
import { parseParams } from '../helpers/parseParams'
import { Routes } from '../routes'
import { IHeaders } from '../SDKScope'

export default class Option extends BaseEndpoint {
  public async list(params: IQuery = {}, headers: IHeaders = {}, source: any = null): Promise<ILocationsResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.listLocation(), parseParams(params), headers, source)) as ILocationsResult
  }

  public async get(id: string, headers: IHeaders = {}, source: any = null): Promise<ILocationResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getLocation(id), {}, headers, source)) as ILocationResult
  }

  public async getPickupLocations(headers: IHeaders = {}, source: any = null): Promise<ILocationsResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getPickupLocations(), {}, headers, source)) as ILocationsResult
  }

  public async countries(headers: IHeaders = {}, source: any = null): Promise<ILocationsResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getCountries(), {}, headers, source)) as ILocationsResult
  }

  public async states(params: { countryCode: string }, headers: IHeaders = {}, source: any = null): Promise<ILocationsResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getStates(), params, headers, source)) as ILocationsResult
  }

  public async addressOptions(params: {}, headers: IHeaders = {}, source: any = null): Promise<ILocationsResult> {
    return (await this.sdkScope.httpService.slatwallResponse(GET, Routes.getAddressOptions(), params, headers, source)) as ILocationsResult
  }
}
