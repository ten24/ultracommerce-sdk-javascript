import { JsonApiDocument, JsonApiSingleResponse } from './JsonApi'
import { ResultResponse } from './ResultResponse'

export interface AuthResponse extends JsonApiDocument {
  token: string
}

export interface IAuthResponse extends JsonApiSingleResponse {
  token: any
  data: AuthResponse
}

export interface IAuthResponseResult extends ResultResponse<IAuthResponse> {}

//TODO: use EmailAddressORUsername parameter instead
export interface AuthLoginAttr {
  emailAddress: string
  password: string
}

export interface AuthAPIKeyAttr {
  apiKey: string
  apiSecret: string
}

export interface RefreshTokenAttr {
  refresh_token: string
}
