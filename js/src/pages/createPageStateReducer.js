import commonPageStateReducer from './commonPageStateReducer';
import attributesItemReducer from 'collections/attributesItemReducer';

import {combineReducers} from 'redux';

export default function(pageStateReducers) {
  const pageReducers = {};
  
  function getPageReducer(type) {
    pageReducers[type] = pageReducers[type] || combineReducers({
      attributes: attributesItemReducer,
      state: combineReducers({
        custom: pageStateReducers[type] || ((item = {}) => item),
        common: commonPageStateReducer
      })
    });

    return pageReducers[type];
  }

  return function(page = {}, action) {
    const attributes = attributesItemReducer(page.attributes, action);
    return getPageReducer(attributes.type)(page, action);
  };
}
