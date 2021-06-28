import { AxiosResponse } from 'axios';
import SlatwallError from './SlatwallError';
declare class BasicSlatwallError extends SlatwallError {
    summary: string;
    constructor(serverResponse: AxiosResponse, errorsSummary: string);
}
export default BasicSlatwallError;
