import {pageAttribute} from './selectors';
import scheduleUnprepare from './sagas/scheduleUnprepare';
import {ENHANCE, CLEANUP} from './actions';

import {select, fork, cancel} from 'redux-saga/effects';
import {takeEvery} from 'redux-saga';

export default function(pageTypeSagas) {
  return function*() {
    const thisPageType = yield select(pageAttribute('type'));

    yield* scheduleUnprepare();

    let task;

    yield takeEvery(ENHANCE, function*() {
      const pageTypeSaga = pageTypeSagas[thisPageType];

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
