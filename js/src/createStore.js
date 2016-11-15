import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

export default function(reducer, saga = function*() {}) {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducer, {}, composeEnhancers(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(saga);

  return store;
}
