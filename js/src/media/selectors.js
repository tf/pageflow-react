import * as actions from './actions';
import {pageState} from 'pages/selectors';
import {bindActionCreators} from 'redux';

export const playerState = pageState('media');

export function playerActions(dispatch) {
  return bindActionCreators(actions, dispatch);
}
