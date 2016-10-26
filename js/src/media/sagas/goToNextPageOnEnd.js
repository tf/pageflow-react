import {takeEvery} from 'redux-saga';
import {put, select} from 'redux-saga/effects';

import {PLAYER_DID_END} from 'media/actions';
import {goToNextPage} from 'media/actions';

import {pageConfiguration} from '../selectors';

export default function*() {
  yield takeEvery(PLAYER_DID_END, function*() {
    const autoChangePage = yield select(pageConfiguration('autoChangePage'));

    if (autoChangePage) {
      yield put(goToNextPage());
    }
  });
}
