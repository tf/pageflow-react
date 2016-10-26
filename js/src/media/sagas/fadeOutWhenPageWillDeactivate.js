import {takeEvery} from 'redux-saga';
import {put} from 'redux-saga/effects';

import {PAGE_WILL_DEACTIVATE, shouldFadeOutAndPause} from '../actions';

export default function*() {
  yield takeEvery(PAGE_WILL_DEACTIVATE, function*() {
    yield put(shouldFadeOutAndPause({fadeDuration: 400}));
  });
}
