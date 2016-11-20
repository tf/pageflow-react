import {registry as pageTypeRegistry} from 'registerPageType';
import createStore from 'createStore';
import {createMiddleware} from 'collections/createSaga';

import {createReducers as createPagesReducers,
        createSaga as createPagesSaga,
        watchCollection as watchPagesCollection,
        createPageType} from 'pages';

import {reducers as pageTypesReducers,
        initFromSeed as initPageTypesFromSeed} from 'pageTypes';

import {createReducers as createFilesReducers,
        watchCollections as watchFilesCollections} from 'files';

import {reducers as i18nReducers,
        initFromSeed as initI18nFromSeed} from 'i18n';

import {combineReducers} from 'redux';

export default function(pageflow) {
  const seed = pageflow.seed || pageflow;
  const collections = pageflow;

  const pageStateReducers = pageTypeRegistry.reduce((result, {name, reducer}) => {
    result[name] = reducer;
    return result;
  }, {});

  const reducer = combineReducers({
    ...i18nReducers,
    ...createPagesReducers(pageStateReducers),
    ...pageTypesReducers,
    ...createFilesReducers(collections.files || {}, seed['file_url_templates'])
  });

  const pageTypeSagas = pageTypeRegistry.reduce((result, {name, saga}) => {
    result[name] = saga;
    return result;
  }, {});

  const m = createMiddleware();
  const saga = createPagesSaga(collections.pages, pageTypeSagas, m);

  const store = createStore(reducer, saga, m);

  initI18nFromSeed(seed, store.dispatch);
  initPageTypesFromSeed(seed, store.dispatch);

  watchPagesCollection(collections.pages, store.dispatch);
  watchFilesCollections(collections.files || {}, store.dispatch);

  if (pageflow.pageType) {
    pageTypeRegistry.forEach(({name, component}) =>
      pageflow.pageType.register(name, createPageType(component, store))
    );
  }

  return store;
}
