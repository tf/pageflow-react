import {takeEvery, delay} from 'redux-saga';
import {call, put, race, take} from 'redux-saga/effects';

import {PLAYING, PAUSED, ENDED,
        hasNotBeenPlayingForAMoment} from '../actions';

export default function*() {
  yield takeEvery([PAUSED, ENDED], function*() {
    yield race({
      task: function*(action) {
        yield call(delay, 700);
        yield put(hasNotBeenPlayingForAMoment(false));
      },
      cancel: take(PLAYING)
    });
  });
}
