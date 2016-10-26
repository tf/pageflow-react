import {takeLatest, delay} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {WILL_PLAY, USER_INTERACTION, userIdle} from '../actions';

export default function*() {
  yield takeLatest([WILL_PLAY, USER_INTERACTION], putUserIdleAfterDelay);
}

function* putUserIdleAfterDelay(action) {
  yield call(delay, 1000);
  yield put(userIdle());
}
