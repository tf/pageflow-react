import createPageStateReducer from './createPageStateReducer';
import createPageSaga from './createPageSaga';

import {
  createReducer as createCollectionReducer,
  createItemSelector as createCollectionItemSelector,

  createSaga as createCollectionSaga,

  createItemScopeConnector as createCollectionItemScopeConnector,

  watchBackboneCollection as watch
} from 'collections';

import createPageType from './createPageType';

const pageStateReducers = {};

export function createReducers(pageStateReducers = {}) {
  return {
    pages: createCollectionReducer('pages', {
      idAttribute: 'permaId',
      itemReducer: createPageStateReducer(pageStateReducers)
    })
  };
}

export const selector = createCollectionItemSelector('pages');

export function createSaga(pageTypeSagas) {
  return createCollectionSaga('pages', {
    itemSaga: createPageSaga(pageTypeSagas)
  });
}

export const connectInPage = createCollectionItemScopeConnector('pages');

export const watchCollection = function(pageflow, dispatch) {
  watch({
    collectionName: 'pages',
    collection: pageflow.pages,
    dispatch,

    attributes: ['perma_id', {type: 'template'}, 'chapter_id'],
    includeConfiguration: true
  });
};


export {
  createPageType
};

export function registerPageStateReducer(name, reducer) {
  pageStateReducers[name] = reducer;
}
