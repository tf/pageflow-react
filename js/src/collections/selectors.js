export function createItemsSelector(collectionName) {
  return function itemsSelector(state) {
    return state[collectionName] || {};
  };
}
