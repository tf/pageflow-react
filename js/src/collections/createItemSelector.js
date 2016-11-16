import {getItemScopeProperty} from './itemScopeHelpers';

export default function(collectionName) {
  return function({id, map = (r => r)} = {}) {
    return function(state, props) {
      let modelId = typeof id == 'function' ? id(props) : id;
      modelId = modelId || state[getItemScopeProperty(collectionName)];

      if (!modelId) {
        throw new Error('Selector expects either id option or item scope.');
      }

      return map(state[collectionName][modelId]);
    };
  };
}
