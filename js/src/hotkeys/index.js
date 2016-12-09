import {SPACE, TAB} from 'utils/keyCodes';
import {space, tab} from './actions';

export function watchEvents(window, store) {
  window.addEventListener('keydown', event => {
    const currentPageId = store.getState().currentPageId;

    if (event.keyCode == SPACE) {
      store.dispatch(space({currentPageId}));
    }
    else if (event.keyCode == TAB) {
      store.dispatch(tab({currentPageId}));
    }
  });
}
