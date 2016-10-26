import {takeLatest, delay} from 'redux-saga';
import {call, put} from 'redux-saga/effects';

import {IS_PLAYING, DID_PAUSE, DID_END,
        updateHasBeenPlayingJustNow} from '../actions';

export default function*() {
  yield takeLatest([IS_PLAYING, DID_PAUSE, DID_END], updateAttribute);
}

function* updateAttribute(action) {
  if (action.type == IS_PLAYING) {
    yield put(updateHasBeenPlayingJustNow(true));
  }
  else {
    yield call(delay, 700);
    yield put(updateHasBeenPlayingJustNow(false));
  }
}
