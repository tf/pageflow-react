import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

export default function(reducer, saga = function*() {}, middleware) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  if (middleware) {
    middlewares.push(middleware);
  }

  const composeEnhancers = typeof __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined' ?
                           window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
                           compose;

  const store = createStore(reducer, {}, composeEnhancers(applyMiddleware(...middlewares)));

  sagaMiddleware.run(saga);

  return store;
}
