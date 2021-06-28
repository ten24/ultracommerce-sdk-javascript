import { AxiosResponse } from 'axios';
import BasicSlatwallError from './BasicSlatwallError';
export default class ExpandedSlatwallError extends BasicSlatwallError {
    errors: any;
    constructor(serverResponse: AxiosResponse, errorsSummary: string, errors: any);
    getErrors(path: string[]): string[] | null;
}
