import {createItemSelector as createCollectionItemSelector} from 'collections';

export function file(collectionName, options) {
  return createCollectionItemSelector(collectionName)(options);
}
