import { SlatwallSDKError } from '../errors';
import { Result } from './Result';
export interface ResultResponse<SuccessType> extends Result<SlatwallSDKError, SuccessType> {
}
