import BaseEndpoint from '../BaseEndpoint';
import { IOrderResult } from '../interfaces/Order';
import { IQuery } from '../interfaces/Query';
import { IOrderDuplicate, IOrderDelete, IOrderSetOrderOnCart } from '../interfaces/requests/index';
import { IHeaders } from '../SDKScope';
export default class Order extends BaseEndpoint {
    get(params?: IQuery, headers?: IHeaders, source?: any): Promise<IOrderResult>;
    duplicate(params: IOrderDuplicate, headers?: IHeaders, source?: any): Promise<IOrderResult>;
    delete(params: IOrderDelete, headers?: IHeaders, source?: any): Promise<IOrderResult>;
    setOrderOnCart(params: IOrderSetOrderOnCart, headers?: IHeaders, source?: any): Promise<IOrderResult>;
}
