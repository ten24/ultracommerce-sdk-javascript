import BaseEndpoint from '../BaseEndpoint';
import { IQuery } from '../interfaces/Query';
import { AuthLoginAttr, IAuthResponseResult, AuthAPIKeyAttr } from '../interfaces/Authentication';
import { IHeaders } from '../SDKScope';
export default class Auth extends BaseEndpoint {
    login(params: AuthLoginAttr, headers?: IHeaders, source?: any): Promise<IAuthResponseResult>;
    generateToken(params: AuthAPIKeyAttr, headers?: IHeaders, source?: any): Promise<IAuthResponseResult>;
    revokeToken(params?: IQuery, headers?: IHeaders, source?: any): Promise<IAuthResponseResult>;
}
