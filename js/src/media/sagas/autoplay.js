import {takeEvery} from 'redux-saga';
import {put, select} from 'redux-saga/effects';

import {PAGE_DID_ACTIVATE, shouldPlay} from '../actions';
import {pageConfiguration} from '../selectors';

export default function*() {
  yield takeEvery(PAGE_DID_ACTIVATE, function*() {
    const autoplay = yield select(pageConfiguration('autoplay'));

    if (autoplay !== false) {
      yield put(shouldPlay());
    }
  });
}
