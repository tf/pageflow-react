import {
  PAGE_DID_PRELOAD, PAGE_DID_PREPARE, PAGE_DID_UNPREPARE,
  PAGE_WILL_ACTIVATE, PAGE_WILL_DEACTIVATE
} from './actions';

export default function(state = {}, action) {
  switch (action.type) {
  case PAGE_DID_PRELOAD:
    return {...state, isPreloaded: true};

  case PAGE_DID_PREPARE:
    return {...state, isPrepared: true};

  case PAGE_DID_UNPREPARE:
    return {...state, isPrepared: false};

  case PAGE_WILL_ACTIVATE:
    return {...state, isActive: true};

  case PAGE_WILL_DEACTIVATE:
    return {...state, isActive: false};

  default:
    return ensureDefaults(state);
  }
}

function ensureDefaults(state) {
  if ('isActive' in state) {
    return state;
  }
  else {
    return {
      ...state,
      isActive: false,
      isPreloaded: false,
      isPrepared: false
    };
  }
}
