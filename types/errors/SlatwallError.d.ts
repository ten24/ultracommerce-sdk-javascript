import { AxiosResponse } from 'axios';
import SlatwallSDKError from './SlatwallSDKError';
export default class SlatwallError extends SlatwallSDKError {
    serverResponse: AxiosResponse;
    constructor(serverResponse: AxiosResponse);
}
