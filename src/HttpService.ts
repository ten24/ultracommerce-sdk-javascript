import Axios, { AxiosError, AxiosInstance } from 'axios'
import * as qs from 'qs'
import { GET, POST } from './constants'
import { BasicSlatwallError, ExpandedSlatwallError, MisconfigurationError, NoResponseError, SlatwallError, SlatwallSDKError } from './errors'

import { IHeaders, SDKScope } from './SDKScope'
import Result from './helpers/Result'
import { ErrorClass } from './interfaces/errors/ErrorClass'
import { JsonApiResponse } from './interfaces/JsonApi'
import { ResultResponse } from './interfaces/ResultResponse'

export class HttpService {
  public axios: AxiosInstance

  public readonly sdkScope: SDKScope

  constructor(sdkScope: SDKScope) {
    this.sdkScope = sdkScope

    this.axios = Axios.create({
      baseURL: this.sdkScope.sdkConfig.host,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
      paramsSerializer: params => {
        return qs.stringify(params, { arrayFormat: 'brackets' })
      },
    })
  }

  public async slatwallResponse(method: string, route: string, params: any = {}, headers: IHeaders = {}, source: any = null): Promise<ResultResponse<JsonApiResponse>> {
    try {
      let res: any
      const request = this.axios[method]
      const requestHeaders = this.createHeaders(headers)
      source = source || Axios.CancelToken.source()
      if (method === GET) {
        // for get request request(urlEndpoint, {axios-config});
        res = await request(route, {
          params: params,
          headers: requestHeaders,
          cancelToken: source.token,
        })
      } else {
        // for POST, PUT, PATCH request request(urlEndpoint, {payload} {axios-config});
        res = await request(route, params, {
          headers: requestHeaders,
          cancelToken: source.token,
        })
      }
      return Result.success(res.data)
    } catch (error) {
      return Result.fail(this.processError(error))
    }
  }

  protected classifyError(error: AxiosError): ErrorClass {
    const { error: errorSummary, errors } = error.response.data

    if (typeof errorSummary === 'string') {
      if (typeof errors === 'object') {
        return ErrorClass.FULL
      }
      return ErrorClass.BASIC
    }
    return ErrorClass.LIMITED
  }

  protected processError(error: AxiosError): SlatwallSDKError {
    if (error.response) {
      // Error from Slatwall outside HTTP 2xx codes
      return this.processSlatwallError(error)
    } else if (error.request) {
      // No response received from Slatwall
      return new NoResponseError()
    } else {
      // Incorrect request setup
      return new MisconfigurationError(error.message)
    }
  }

  protected processSlatwallError(error: AxiosError): SlatwallError {
    const { error: errorSummary, errors } = error.response.data
    const errorClass = this.classifyError(error)

    if (errorClass === ErrorClass.FULL) {
      return new ExpandedSlatwallError(error.response, errorSummary, errors)
    } else if (errorClass === ErrorClass.BASIC) {
      return new BasicSlatwallError(error.response, errorSummary)
    } else {
      return new SlatwallError(error.response)
    }
  }

  protected createHeaders = (headers: IHeaders): IHeaders => {
    let formattedHeaders: IHeaders = {}
    if (!headers.bearerToken) {
      headers.bearerToken = this.sdkScope.bearerToken
    }
    formattedHeaders['Auth-Token'] = `Bearer ${headers.bearerToken}`
    delete headers.bearerToken

    if (headers.contentType == 'form-data') {
      formattedHeaders['Content-Type'] = 'multipart/form-data; boundary=100'
    }
    delete headers.contentType

    //any additional keys
    Object.keys(headers).map(headerName => {
      formattedHeaders[headerName] = headers[headerName]
    })

    return formattedHeaders
  }
}
