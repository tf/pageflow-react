import {init} from './actions';
import reducer from './reducer';

export const reducers = {entry: reducer};

export function initFromSeed({slug}, dispatch) {
  dispatch(init({slug}));
}
