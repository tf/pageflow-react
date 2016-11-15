import {addItemScope} from 'collections/itemScopeHelpers';

import createSagaMiddleware, {delay} from 'redux-saga';
import {take, call} from 'redux-saga/effects';
import {applyMiddleware, createStore as createReduxStore} from 'redux';

import sinon from 'sinon';

export const WAIT_FOR_DELAY = 'SAGA_HELPERS__WAIT_FOR_DELAY';

export default function(saga, {page = {}} = {}) {
  const putSpy = sinon.spy();

  const initialState= addItemScope({
    pages: {
      5: page
    }
  }, 'pages', 5);

  const sagaMiddleware = createSagaMiddleware({
    callInterceptor: function(c) {
      const fn = c.fn;

      if (fn === delay) {
        return call(function*() {
          yield take(WAIT_FOR_DELAY);
        });
      }
      else {
        return c;
      }
    }
  });

  const store = createReduxStore((state, action) => {
    putSpy(action);
    return state;
  }, initialState, applyMiddleware(sagaMiddleware));


  sagaMiddleware.run(saga);


  return {
    dispatch(action) {
      store.dispatch(action);
      return this;
    },

    delayElapsed() {
      store.dispatch({type: WAIT_FOR_DELAY});
      return this;
    },

    put: putSpy
  };
}
