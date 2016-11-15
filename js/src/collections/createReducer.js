import {RESET, ADD, CHANGE, REMOVE} from './actions';

export default function(collectionName,
                        {
                          idAttribute = 'id',
                          itemReducer = item => item
                        } = {}) {
  return function(state = {}, action) {
    let clone;

    if (!action.meta || action.meta.collectionName != collectionName) {
      return state;
    }

    switch (action.type) {
    case RESET:
      return action.payload.items.reduce((result, item) => {
        result[item[idAttribute]] = itemReducer(item, action);
        return result;
      }, {});

    case ADD:
    case CHANGE:
      return {
        ...state,
        [action.payload.attributes[idAttribute]]: itemReducer(action.payload.attributes)
      };

    case REMOVE:
      clone = {...state};
      delete clone[action.payload.id];
      return clone;

    default:
      if (action.meta.itemId) {
        const item = state[action.meta.itemId];
        const reducedItem = itemReducer(item, action);

        if (reducedItem !== item) {
          return {
            ...state,
            [action.meta.itemId]: reducedItem
          };
        }
      }

      return state;
    }
  };
}
