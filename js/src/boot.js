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

import {reducers as currentReducers,
        watch as watchCurrent} from 'current';

import {createReducers as createFilesReducers,
        watchCollections as watchFilesCollections} from 'files';

import {reducers as settingsReducers,
        createSaga as createSettingsSaga,
        watch as watchSettings} from 'settings';

import {reducers as i18nReducers,
        initFromSeed as initI18nFromSeed} from 'i18n';

import {reducers as entryReducers,
        initFromSeed as initEntryFromSeed} from 'entry';

import {watchEvents as watchHotkeyEvents} from 'hotkeys';

import {reducers as hideTextReducers,
        watch as watchHideText} from 'hideText';

import {reducers as widgetsReducers,
        watch as watchWidgets,
        createWidgetType} from 'widgets';

import {combineReducers} from 'redux';

export default function(pageflow) {
  const isEditor = !!pageflow.storylines;
  const isServerSide = !pageflow.settings;

  const seed = pageflow.seed;
  const collections = isEditor ? pageflow : seed;

  const pageStateReducers = pageTypeRegistry.reduce((result, {name, reducer}) => {
    result[name] = reducer;
    return result;
  }, {});

  const reducer = combineReducers({
    ...i18nReducers,
    ...entryReducers,
    ...currentReducers,
    ...storylinesReducers,
    ...chaptersReducers,
    ...createPagesReducers(pageStateReducers),
    ...pageTypesReducers,
    ...createFilesReducers(collections.files || {}, {
      fileUrlTemplates: seed['file_url_templates'],
      modelTypes: seed['file_model_types']
    }),
    ...settingsReducers,
    ...hideTextReducers,
    ...widgetsReducers
  });

  let saga, m;

  if (!isServerSide) {
    const pageTypeSagas = pageTypeRegistry.reduce((result, {name, saga}) => {
      result[name] = saga;
      return result;
    }, {});

    m = createMiddleware();

    saga = function*() {
      yield [
        createPagesSaga(collections.pages, pageTypeSagas, m)(),
        createSettingsSaga(pageflow.settings)()
      ];
    };
  }

  const store = createStore(reducer, saga, m);

  initEntryFromSeed(seed, store.dispatch);
  initI18nFromSeed(seed, store.dispatch);
  initPageTypesFromSeed(seed, store.dispatch);

  watchStorylinesCollection(collections.storylines, store.dispatch);
  watchChaptersCollection(collections.chapters, store.dispatch);
  watchPagesCollection(collections.pages, store.dispatch);
  watchFilesCollections(collections.files || {}, store.dispatch);

  if (!isServerSide) {
    watchCurrent(pageflow.events, store.dispatch);
    watchSettings(pageflow.settings, store.dispatch);
    watchWidgets(pageflow.events, pageflow.widgets, store.dispatch);
    watchHotkeyEvents(window, store);
    watchHideText(pageflow.hideText, store.dispatch);

    pageTypeRegistry.forEach(options =>
      pageflow.pageType.register(options.name, createPageType({
        ...options,
        Component: options.component,
        store
      }))
    );

    widgetTypeRegistry.forEach(({name, component}) =>
      pageflow.widgetTypes.register(name, createWidgetType(component, store))
    );
  }

  return store;
}
