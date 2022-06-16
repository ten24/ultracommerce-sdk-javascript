import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi';
import { ResultResponse } from './ResultResponse';
export interface QuoteAttr extends JsonApiDocument {
    orderID: string;
}
export interface IQuote extends JsonApiSingleResponse {
    data: QuoteAttr;
}
export interface IQuotes extends JsonApiListResponse {
    data: QuoteAttr[];
}
export interface IQuoteResult extends ResultResponse<IQuote> {
}
export interface IQuotesResult extends ResultResponse<IQuotes> {
}
