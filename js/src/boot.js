import {registry as pageTypeRegistry} from 'registerPageType';
import createStore from 'createStore';
import {createMiddleware} from 'collections/createSaga';

import {createReducers as createPagesReducers,
        createSaga as createPagesSaga,
        watchCollection as watchPagesCollection,
        createPageType} from 'pages';

import {createReducers as createFilesReducers,
        watchCollections as watchFilesCollections} from 'files';

import {combineReducers} from 'redux';

export default function(pageflow) {
  const pageStateReducers = pageTypeRegistry.reduce((result, {name, reducer}) => {
    result[name] = reducer;
    return result;
  }, {});

  const reducer = combineReducers({
    ...createPagesReducers(pageStateReducers),
    ...createFilesReducers(pageflow.files || {})
  });

  const pageTypeSagas = pageTypeRegistry.map(({name, saga}) => saga);
  const m = createMiddleware();
  const saga = createPagesSaga(pageTypeSagas, m);

  const store = createStore(reducer, saga, m);

  watchPagesCollection(pageflow, store.dispatch);
  watchFilesCollections(pageflow.files || {}, store.dispatch);

  if (pageflow.pageType) {
    pageTypeRegistry.forEach(({name, component}) =>
      pageflow.pageType.register(name, createPageType(component, store))
    );
  }

  return store;
}
