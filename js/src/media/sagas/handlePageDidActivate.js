import {takeEvery, delay} from 'redux-saga';
import {call, put, select, take, race} from 'redux-saga/effects';

import {PAGE_DID_ACTIVATE, PAGE_WILL_DEACTIVATE} from 'pages/actions';
import {PREBUFFERED, actionCreators} from 'media/actions';
import {pageAttribute} from 'pages/selectors';

const {play, prebuffer} = actionCreators();

export default function*() {
  yield takeEvery(PAGE_DID_ACTIVATE, function*(action) {
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

  const autoplay = yield select(pageAttribute('autoplay'));

  if (autoplay !== false) {
    yield call(delay, 1000);
    yield put(play());
  }
}
