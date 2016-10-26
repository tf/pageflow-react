import {takeEvery} from 'redux-saga';
import {call} from 'redux-saga/effects';

import {SHOULD_PLAY, SHOULD_PAUSE, DID_END} from '../actions';

export default function*(scrollIndicator) {
  yield takeEvery([SHOULD_PLAY], function*() {
    yield call(disable, scrollIndicator);
  });

  yield takeEvery([SHOULD_PAUSE, DID_END], function*() {
    yield call(enable, scrollIndicator);
  });
}

function disable(scrollIndicator) {
  if (pageflow.widgets.isPresent('classic_player_controls')) {
    scrollIndicator.scheduleDisable();
  }
  else {
    scrollIndicator.disable();
  }
}

function enable(scrollIndicator) {
  scrollIndicator.enable();
}
