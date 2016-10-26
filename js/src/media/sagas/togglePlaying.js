import {takeEvery} from 'redux-saga';
import {put, select} from 'redux-saga/effects';

import {SHOULD_TOGGLE_PLAYING, shouldPlay, shouldPause} from '../actions';

export default function*() {
  yield takeEvery(SHOULD_TOGGLE_PLAYING, toggle);
}

function* toggle() {
  const isPlaying = yield select(playerState => playerState.shouldPlay);

  if (isPlaying) {
    yield put(shouldPause());
  }
  else {
    yield put(shouldPlay());
  }
}
