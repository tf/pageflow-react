import {shouldPlay} from './actions';

import {bindActionCreators} from 'redux';

export function playerState(state) {
  return state;
}

export function playerActions(dispatch) {
  return bindActionCreators({
    play: shouldPlay
  }, dispatch);
}
