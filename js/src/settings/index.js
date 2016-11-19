import reducer from './reducer';
import {load, UPDATE} from './actions';

import {takeEvery} from 'redux-saga';
import {call} from 'redux-saga/effects';

export const reducers = {settings: reducer};

export function createSaga(model) {
  return function* saga() {
    yield takeEvery(UPDATE, function*(action) {
      yield call([model, model.set],
                 action.payload.property,
                 action.payload.value);
    });
  };
}

export function watch(model, dispatch) {
  dispatch(load({settings: model.toJSON()}));
  model.on('change', () => dispatch(load({settings: model.toJSON()})));
}
