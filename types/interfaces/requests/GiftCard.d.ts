interface IGiftCardAddCode {
    giftCardCode: string;
    giftCardPin: string;
}
interface IGiftCardAddId {
    giftCardID: string;
    giftCardPin: string;
}
export declare type IGiftCardAdd = IGiftCardAddCode | IGiftCardAddId;
interface IGiftCardUpdateStatusCode {
    giftCardCode: string;
    activeFlag: boolean;
}
interface IGiftCardUpdateStatusId {
    giftCardID: string;
    activeFlag: boolean;
}
export declare type IGiftCardUpdateStatus = IGiftCardUpdateStatusCode | IGiftCardUpdateStatusId;
interface IGiftCardTransaction {
    pageRecordsShow?: number;
    currentPage?: number;
}
interface IGiftCardTransactionsCode extends IGiftCardTransaction {
    giftCardCode: string;
}
interface IGiftCardTransactionsId extends IGiftCardTransaction {
    giftCardID: string;
}
export declare type IGiftCardTransactions = IGiftCardTransactionsCode | IGiftCardTransactionsId;
export {};
