import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi';
import { ResultResponse } from './ResultResponse';

export interface QuotesItemAttributes extends JsonApiDocument{
  calculatedDiscountTotal: number,
  calculatedFulfillmentHandlingFeeTotal: number,
  calculatedFulfillmentTotal: number,
  calculatedSubTotal: number,
  calculatedSubTotalAfterItemDiscounts: number,
  calculatedTaxTotal: number,
  calculatedTotal: number,
  calculatedTotalItemQuantity: number,
  createdDateTime: string,
  orderID: string
  orderNotes: string,
  orderOpenDateTime: string,
  quoteName: string,
  quoteNumber: string,
  subTotalAfterItemDiscounts: number
}

export interface QuotesAttributes extends JsonApiDocument {
  pageRecordsEnd: number,
  pageRecordsShow: number,
  pageRecordsStart: number,
  recordsCount: number,
  totalPages: number,
  currentPage : number,
  ordersOnAccount : QuotesItemAttributes
}

export interface IQuotes extends JsonApiListResponse {
  data: QuotesAttributes[]
}

export interface IQuoteResponse extends JsonApiListResponse {
    data: QuotesAttributes[];
}

export interface IQuotesResult extends ResultResponse<IQuotes> {}

export interface IQuoteResponseResult extends ResultResponse<IQuoteResponse> {}