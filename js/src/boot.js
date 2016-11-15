import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {registry as pageTypeRegistry} from 'registerPageType';

import {createReducers as createPagesReducers,
        createSaga as createPagesSaga,
        watchCollection as watchPagesCollection,
        createPageType} from 'pages';

export default function(pageflow) {
  const pageStateReducers = pageTypeRegistry.reduce((result, {name, reducer}) => {
    result[name] = reducer;
    return result;
  });

  const pageTypeSagas = pageTypeRegistry.map(({name, saga}) => saga);

  const reducer = combineReducers({
    ...createPagesReducers(pageStateReducers)
  });

  const sagaMiddleware = createSagaMiddleware(
    ...createPagesSaga(pageTypeSagas)
  );

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducer, {}, composeEnhancers(applyMiddleware(sagaMiddleware)));

  watchPagesCollection(pageflow, store.dispatch);

  pageTypeRegistry.each(({name, component}) =>
    pageflow.pageType.register(name, createPageType(component, store))
  );
}
