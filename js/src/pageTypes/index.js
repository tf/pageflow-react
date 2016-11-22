import {init} from './actions';
import reducer from './reducer';
import {camelize} from 'utils';

export const reducers = {pageTypes: reducer};

export function initFromSeed(seed, dispatch) {
  dispatch(init({pageTypes: camelize.deep(seed.page_types)}));
}
