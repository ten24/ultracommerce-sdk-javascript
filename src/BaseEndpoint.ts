import { SDKScope } from './SDKScope'

export default class BaseEndpoint {
  public readonly sdkScope: SDKScope

  constructor(sdkScope: SDKScope) {
    this.sdkScope = sdkScope
  }
}
