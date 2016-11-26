import {
  createReducer as createCollectionReducer,
  watch
} from 'collections';

import {camelize} from 'utils';

export function createReducers(fileCollections, {
  fileUrlTemplates = {},
  modelTypes = {}
}) {
  const reducers = Object.keys(fileCollections).reduce((result, collectionName) => {
    collectionName = camelize(collectionName);
    result[collectionName] = createCollectionReducer(collectionName);
    return result;
  }, {});

  fileUrlTemplates = camelize.keys(fileUrlTemplates);
  reducers.fileUrlTemplates = (state => fileUrlTemplates);

  modelTypes = camelize.keys(modelTypes);
  reducers.modelTypes = (state => modelTypes);

  return reducers;
}

export function watchCollections(fileCollections, dispatch) {
  Object.keys(fileCollections).forEach(collectionName => {
    watch({
      collection: fileCollections[collectionName],
      collectionName: camelize(collectionName),
      dispatch,

      attributes: ['id', 'basename', 'variants', 'parent_file_id', 'parent_file_model_type'],
      includeConfiguration: true
    });
  });
}
