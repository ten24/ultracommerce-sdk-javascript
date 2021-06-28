import SlatwallSDKError from './SlatwallSDKError';

export default class MisconfigurationError extends SlatwallSDKError {
  constructor(message: string) {
    super(`Incorrect request setup: ${message}`);
    (Object as any).setPrototypeOf(this, MisconfigurationError.prototype);
    this.name = 'MisconfigurationError';
  }
}
