import { AxiosResponse } from 'axios';
import SlatwallError from './SlatwallError';

class BasicSlatwallError extends SlatwallError {
  public summary: string;

  constructor(serverResponse: AxiosResponse, errorsSummary: string) {
    super(serverResponse);
    (Object as any).setPrototypeOf(this, BasicSlatwallError.prototype);
    this.name = 'BasicSlatwallError';
    this.summary = errorsSummary;
  }
}

export default BasicSlatwallError;
