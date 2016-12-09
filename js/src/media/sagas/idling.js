import {takeLatest, delay} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {PLAY, USER_INTERACTION, userIdle} from '../actions';
import {HOTKEY_TAB} from 'hotkeys/actions';

export default function*() {
  yield takeLatest([PLAY, USER_INTERACTION, HOTKEY_TAB], putUserIdleAfterDelay);
}

function* putUserIdleAfterDelay(action) {
  yield call(delay, 1000);
  yield put(userIdle());
}
