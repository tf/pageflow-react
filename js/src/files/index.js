import {
  createReducer as createCollectionReducer,
  watch
} from 'collections';

import camelize from 'utils/camelize';

export function createReducers(fileCollections, fileUrlTemplates = {}) {
  const reducers = Object.keys(fileCollections).reduce((result, collectionName) => {
    collectionName = camelize(collectionName);
    result[collectionName] = createCollectionReducer(collectionName);
    return result;
  }, {});

  fileUrlTemplates = camelize.keys(fileUrlTemplates);
  reducers.fileUrlTemplates = (state => fileUrlTemplates);

  return reducers;
}

export function watchCollections(fileCollections, dispatch) {
  Object.keys(fileCollections).forEach(collectionName => {
    watch({
      collection: fileCollections[collectionName],
      collectionName: camelize(collectionName),
      dispatch,

      attributes: ['id', 'variants'],
      includeConfiguration: true
    });
  });
}
