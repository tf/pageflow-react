import {registry as pageTypeRegistry} from 'registerPageType';
import {registry as widgetTypeRegistry} from 'registerWidgetType';

import createStore from 'createStore';
import {createMiddleware} from 'collections/createSaga';

import {reducers as storylinesReducers,
        watchCollection as watchStorylinesCollection} from 'storylines';

import {reducers as chaptersReducers,
        watchCollection as watchChaptersCollection} from 'chapters';

import {createReducers as createPagesReducers,
        createSaga as createPagesSaga,
        watchCollection as watchPagesCollection,
        createPageType} from 'pages';

import {reducers as pageTypesReducers,
        initFromSeed as initPageTypesFromSeed} from 'pageTypes';

import {reducers as currentReducers} from 'current';

import {createReducers as createFilesReducers,
        watchCollections as watchFilesCollections} from 'files';

import {reducers as i18nReducers,
        initFromSeed as initI18nFromSeed} from 'i18n';

import {createWidgetType} from 'widgets';

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
    ...currentReducers,
    ...storylinesReducers,
    ...chaptersReducers,
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

  watchStorylinesCollection(collections.storylines, store.dispatch);
  watchChaptersCollection(collections.chapters, store.dispatch);
  watchPagesCollection(collections.pages, store.dispatch);
  watchFilesCollections(collections.files || {}, store.dispatch);

  if (pageflow.pageType) {
    pageTypeRegistry.forEach(({name, component}) =>
      pageflow.pageType.register(name, createPageType(component, store))
    );

    widgetTypeRegistry.forEach(({name, component}) =>
      pageflow.widgetTypes.register(name, createWidgetType(component, store))
    );
  }

  return store;
}
