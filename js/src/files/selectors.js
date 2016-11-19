import {
  createItemSelector as createCollectionItemSelector,
  createItemsSelector as createCollectionItemsSelector
} from 'collections';

import expandUrls from './expandUrls';

export function file(collectionName, options) {
  const selector = createCollectionItemSelector(collectionName)(options);

  return function(state, props) {
    return expandUrls(collectionName, selector(state, props), state.fileUrlTemplates);
  };
}

export function fileIds(collectionName) {
  const selector = createCollectionItemsSelector(collectionName);

  return function(state, props) {
    const files = selector(state, props);
    return Object.keys(files).map(key => parseInt(key, 10));
  };
}
