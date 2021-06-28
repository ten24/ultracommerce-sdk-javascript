import { SDKConfig } from './SDKScope';
import Slatwall from './Slatwall';
import * as errors from './errors';
import Result from './helpers/Result';
import BaseEndpoint from './BaseEndpoint';
declare const init: (config: SDKConfig) => Slatwall;
export { Slatwall, BaseEndpoint as Http, Result, errors, init };
