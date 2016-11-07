import {PAGE_UPDATE} from './actions';

export default function(initialPageConfiguration) {
  return function(state = initialPageConfiguration, action) {
    switch (action.type) {
    case PAGE_UPDATE:
      return {
        ...state,
        pageConfiguration: action.payload.pageConfiguration
      };

    default:
      return state;
    }
  };
}
