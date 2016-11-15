import {selector as page} from '../pages';
import scheduleUnprepare from './sagas/scheduleUnprepare';
import {ENHANCE, CLEANUP} from './actions';

import {select, fork, cancel} from 'redux-saga/effects';
import {takeEvery} from 'redux-saga';

export default function(pageTypeSagas) {
  return function*() {
    const thisPage = yield select(page());

    yield* scheduleUnprepare();

    let task;

    yield takeEvery(ENHANCE, function*() {
      const pageTypeSaga = pageTypeSagas[thisPage.type];

      if (pageTypeSaga) {
        task = yield fork(pageTypeSaga);
      }
    });

    yield takeEvery(CLEANUP, function*() {
      if (task) {
        yield cancel(task);
      }
    });
  };
}
