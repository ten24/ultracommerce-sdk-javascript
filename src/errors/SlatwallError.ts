import { AxiosResponse } from 'axios';
import SlatwallSDKError from './SlatwallSDKError';

export default class SlatwallError extends SlatwallSDKError {
  public serverResponse: AxiosResponse;

  constructor(serverResponse: AxiosResponse) {
    super(`Slatwall returned a HTTP ${serverResponse.status} error code`);
    (Object as any).setPrototypeOf(this, SlatwallError.prototype);
    this.name = 'SpreeError';
    const reducedServerResponse = { ...serverResponse };
    // Reduce logging by removing the 'enumerable' flag on some keys in AxiosResponse.
    Object.defineProperties(
      reducedServerResponse,
      {
        config: { enumerable: false },
        data: { enumerable: false },
        headers: { enumerable: false },
        request: { enumerable: false }
      }
    );
    this.serverResponse = reducedServerResponse;
  }
}
