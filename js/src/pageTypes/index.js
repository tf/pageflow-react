import {init} from './actions';
import reducer from './reducer';

export const reducers = {pageTypes: reducer};

export function initFromSeed(seed, dispatch) {
  dispatch(init({pageTypes: seed.page_types}));
}
