export default class SlatwallSDKError extends Error {
  constructor(name: string) {
    super(name)
    ;(Object as any).setPrototypeOf(this, SlatwallSDKError.prototype)
  }
}
