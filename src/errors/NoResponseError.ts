import SlatwallSDKError from './SlatwallSDKError'

export default class NoResponseError extends SlatwallSDKError {
  constructor() {
    super('No response received from Spree')
    ;(Object as any).setPrototypeOf(this, NoResponseError.prototype)
    this.name = 'NoResponseError'
  }
}
