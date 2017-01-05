import {takeEvery} from 'redux-saga';
import {call, select} from 'redux-saga/effects';

import {DEACTIVATE as HIDE_TEXT_DEACTIVATE} from 'hideText/actions';
import {pageIsActive} from 'pages/selectors';

export default function*() {
  yield takeEvery(HIDE_TEXT_DEACTIVATE, function*() {
    console.log('hide text deactovate');
    if (yield select(pageIsActive())) {
      yield call(enable);
    }
  });
}

function enable() {
  pageflow.events.trigger('scroll_indicator:enable');
}
