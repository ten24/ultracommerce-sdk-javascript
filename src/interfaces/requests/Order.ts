export interface IOrderDuplicate {
  orderID: string
  returnJSONObjects: string
  setAsCartFlag: number
}

export interface IOrderDelete {
  orderID: String
  returnJSONObjects: string
}

export interface IOrderSetOrderOnCart {
  orderID: String
  returnJSONObjects: string
}
