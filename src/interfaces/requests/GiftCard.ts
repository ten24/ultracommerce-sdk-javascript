interface IGiftCardAddCode {
  giftCardCode: string
  giftCardPin: string
}

interface IGiftCardAddId {
  giftCardID: string
  giftCardPin: string
}

export type IGiftCardAdd = IGiftCardAddCode | IGiftCardAddId

interface IGiftCardUpdateStatusCode {
  giftCardCode: string
  activeFlag: boolean
}

interface IGiftCardUpdateStatusId {
  giftCardID: string
  activeFlag: boolean
}

export type IGiftCardUpdateStatus = IGiftCardUpdateStatusCode | IGiftCardUpdateStatusId

interface IGiftCardTransaction {
  pageRecordsShow?: number
  currentPage?: number
}

interface IGiftCardTransactionsCode extends IGiftCardTransaction {
  giftCardCode: string
}

interface IGiftCardTransactionsId extends IGiftCardTransaction {
  giftCardID: string
}

export type IGiftCardTransactions = IGiftCardTransactionsCode | IGiftCardTransactionsId