import { AxiosResponse } from 'axios';
import get from 'lodash/get';
import BasicSlatwallError from './BasicSlatwallError';

export default class ExpandedSlatwallError extends BasicSlatwallError {
  public errors: any;

  constructor(serverResponse: AxiosResponse, errorsSummary: string, errors: any) {
    super(serverResponse, errorsSummary);
    (Object as any).setPrototypeOf(this, ExpandedSlatwallError.prototype);
    this.name = 'ExpandedSlatwallError';
    this.errors = Object.keys(errors).reduce((acc, field) => {
      const keys = field.split('.');
      let key = keys.shift();
      let node = acc;
      while (key) {
        if (!node[key]) {
          if (keys.length === 0) {
            node[key] = errors[field];
          } else {
            node[key] = {};
          }
        }
        node = node[key];
        key = keys.shift();
      }
      return acc;
    }, {});
  }

  public getErrors(path: string[]): string[] | null {
    return get(this.errors, path, null);
  }
}
