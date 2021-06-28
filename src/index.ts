import SDKScope, { SDKConfig, IAuthToken } from './SDKScope';
import Slatwall from './Slatwall';
import * as errors from './errors';
import Result from './helpers/Result';
import BaseEndpoint from './BaseEndpoint';

const init = (config: SDKConfig) => new Slatwall(config);

export { Slatwall, BaseEndpoint as Http, Result, errors, init };
