/*global process*/
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

export default function(reducer, saga = function*() {}, middleware) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  if (middleware) {
    middlewares.push(middleware);
  }

  let composeEnhancers = compose;

  if ((typeof process === 'undefined' ||
       process.env.NODE_ENV !== 'production') &&
      typeof __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined') {

    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }

  const store = createStore(reducer, {}, composeEnhancers(applyMiddleware(...middlewares)));

  sagaMiddleware.run(saga);

  return store;
}
