import {TOGGLE_PLAYING, play, pause} from '../actions';
import {playerState} from '../selectors';

import {takeEvery} from 'redux-saga';
import {put, select} from 'redux-saga/effects';

export default function*() {
  yield takeEvery(TOGGLE_PLAYING, toggle);
}

function* toggle() {
  const state = yield select(playerState);

  if (state.isPlaying) {
    yield put(pause());
  }
  else {
    yield put(play());
  }
}
