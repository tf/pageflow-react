import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import {sagaMatchers} from './sagas';

chai.use(chaiEnzyme());
chai.use(sinonChai);
chai.use(sagaMatchers);

export const expect = chai.expect;
