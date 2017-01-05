import {takeEvery} from 'redux-saga';
import {put, take, call, race} from 'redux-saga/effects';

import {playAndFadeIn, prebuffer, PREBUFFERED} from '../actions';
import {PAGE_WILL_ACTIVATE, PAGE_WILL_DEACTIVATE} from 'pages/actions';

export default function*() {
  yield takeEvery(PAGE_WILL_ACTIVATE, function*(action) {
    yield race({
      task: call(prebufferAndPlay),
      cancel: take(PAGE_WILL_DEACTIVATE)
    });
  });
}

function* prebufferAndPlay() {
  yield [
    take(PREBUFFERED),
    put(prebuffer())
  ];

  yield put(playAndFadeIn({fadeDuration: 1000}));
}
