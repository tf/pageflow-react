import {createItemSelector as createCollectionItemSelector} from 'collections';
import expandUrls from './expandUrls';

export function file(collectionName, options) {
  const selector = createCollectionItemSelector(collectionName)(options);

  return function(state, props) {
    return expandUrls(collectionName, selector(state, props), state.fileUrlTemplates);
  };
}
