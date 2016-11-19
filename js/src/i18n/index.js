import {init} from './actions';
import reducer from './reducer';

export const reducers = {i18n: reducer};

export function initFromSeed({locale}, dispatch) {
  dispatch(init({locale}));
}
