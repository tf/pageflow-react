import {takeEvery} from 'redux-saga';
import {put} from 'redux-saga/effects';

import {fadeOutAndPause} from '../actions';
import {PAGE_WILL_DEACTIVATE} from 'pages/actions';

export default function*() {
  yield takeEvery(PAGE_WILL_DEACTIVATE, function*() {
    yield put(fadeOutAndPause({fadeDuration: 400}));
  });
}
