import {addItemScope} from 'collections/itemScopeHelpers';
import runSaga from './runSaga';

export default function(saga, {page = {}} = {}) {
  return runSaga(saga, {
    initialState: addItemScope({
      pages: {
        5: page
      }
    }, 'pages', 5)
  });
}
