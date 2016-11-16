import createPageStateReducer from './createPageStateReducer';
import createPageSaga from './createPageSaga';
import createPageType from './createPageType';

import {
  createReducer as createCollectionReducer,
  createItemSelector as createCollectionItemSelector,
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

export const selector = createCollectionItemSelector('pages');

export function createSaga(pageTypeSagas) {
  return createCollectionSaga('pages', {
    itemSaga: createPageSaga(pageTypeSagas)
  });
}

export const connectInPage = createCollectionItemScopeConnector('pages');

export function watchCollection(pageflow, dispatch) {
  watch({
    collection: pageflow.pages,
    collectionName: 'pages',
    dispatch,

    attributes: ['perma_id', {type: 'template'}, 'chapter_id'],
    includeConfiguration: true
  });
}

export {
  createPageType
};
