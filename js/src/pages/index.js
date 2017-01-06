import createPageStateReducer from './createPageStateReducer';
import createPageSaga from './createPageSaga';
import createReactPageType from './createPageType';
import mergePageTypes from './mergePageTypes';

import {
  createReducer as createCollectionReducer,
  createSaga as createCollectionSaga,
  createItemScopeConnector as createCollectionItemScopeConnector,
  watch
} from 'collections';

export function createReducers(pageStateReducers = {}) {
  return {
    pages: createCollectionReducer('pages', {
      idAttribute: 'permaId',
      itemReducer: createPageStateReducer(pageStateReducers)
    })
  };
}

export function createSaga(pages, pageTypeSagas, middleware) {
  return createCollectionSaga('pages', {
    itemSaga: createPageSaga({pages, pageTypeSagas}),
    middleware
  });
}

export function watchCollection(pages, dispatch) {
  watch({
    collection: pages,
    collectionName: 'pages',
    dispatch,

    idAttribute: 'perma_id',
    attributes: ['perma_id', {type: 'template'}, 'chapter_id'],
    includeConfiguration: true
  });
}

export const connectInPage = createCollectionItemScopeConnector('pages');

export function createPageType(options) {
  return mergePageTypes(createReactPageType(options), options.mixin || {});
}
