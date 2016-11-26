import {
  createItemSelector as createCollectionItemSelector
} from 'collections';

import expandUrls from './expandUrls';
import addModelType from './addModelType';

export function file(collectionName, options) {
  const selector = createCollectionItemSelector(collectionName)(options);

  return function(state, props) {
    return addModelType(
      collectionName,
      expandUrls(collectionName,
                 selector(state, props),
                 state.fileUrlTemplates),
      state.modelTypes);
  };
}

export function fileExists() {
  return function(state, props) {
    return function(collectionName, id) {
      return id &&
             !!createCollectionItemSelector(collectionName)({id})(state, props);
    };
  };
}
