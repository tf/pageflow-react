import {getItemScopeProperty} from './itemScopeHelpers';

export default function(collectionName) {
  return function({id, map = (r => r)} = {}) {
    return function(state, props) {
      let modelId = typeof id == 'function' ? id(props) : id;
      modelId = modelId || state[getItemScopeProperty(collectionName)];

      if (!modelId) {
        return null;
      }

      return map(state[collectionName][modelId]);
    };
  };
}
