import {PAGE_WILL_ACTIVATE} from 'pages/actions';
import {getItemIdFromItemAction} from 'collections/itemActionHelpers';

export default function(state = null, action) {
  switch (action.type) {
  case PAGE_WILL_ACTIVATE:
    return getItemIdFromItemAction(action);
  default:
    return state;
  }
}
