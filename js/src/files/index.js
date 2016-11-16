import {
  createReducer as createCollectionReducer,
  watch
} from 'collections';

export function createReducers(fileCollections, pageStateReducers = {}) {
  return Object.keys(fileCollections).reduce((result, collectionName) => {
    result[collectionName] = createCollectionReducer(collectionName);
    return result;
  }, {});
}

export function watchCollections(fileCollections, dispatch) {
  Object.keys(fileCollections).forEach(collectionName => {
    watch({
      collection: fileCollections[collectionName],
      collectionName: collectionName,
      dispatch,

      attributes: ['id', 'variants_id'],
      includeConfiguration: true
    });
  });
}
