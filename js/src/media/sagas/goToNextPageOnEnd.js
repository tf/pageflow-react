import {takeEvery} from 'redux-saga';
import {put, select} from 'redux-saga/effects';

import {ENDED} from '../actions';
import {goToNextPage} from 'foo/actions';

import {pageAttribute} from 'pages/selectors';

export default function*() {
  yield takeEvery(ENDED, function*() {
    const autoChangePage = yield select(pageAttribute('autoChangePage'));

    if (autoChangePage) {
      yield put(goToNextPage());
    }
  });
}
