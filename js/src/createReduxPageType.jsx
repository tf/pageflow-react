import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import pageReducers from 'page/reducers';
import pageSagas from 'page/sagas';

import {pageDidPreload, pageDidPrepare, pageScheduleUnprepare,
        pageWillActivate, pageDidActivate, pageWillDeactivate, pageDidDeactivate,
        pageDidResize,
        pageUpdate} from './page/actions';

export default function(Component, options) {
  return {
    scroller: false,

    enhance(pageElement, configuration) {
      const sagaMiddleware = createSagaMiddleware(
        ...options.sagas,
        ...pageSagas
      );

      const reducer = combineReducers({
        ...options.reducers,
        ...pageReducers(configuration)
      });

      const initialState = {
        seed: pageflow.seed
      };

      const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
      const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

      ReactDOM.render(
        <Provider store={store}>
          <Component />
        </Provider>,
        pageElement[0]
      );
    },

    preload() {
      this.store.dispatch(pageDidPreload());
    },

    prepare() {
      this.store.dispatch(pageDidPrepare());
    },

    unprepare() {
      this.store.dispatch(pageScheduleUnprepare());
    },

    activating(pageElement, configuration, options) {
      this.store.dispatch(pageWillActivate(options));
    },

    activated() {
      this.store.dispatch(pageDidActivate());
    },

    deactivating() {
      this.store.dispatch(pageWillDeactivate());
    },

    deactivated() {
      this.store.dispatch(pageDidDeactivate());
    },

    resize() {
      this.store.dispatch(pageDidResize());
    },

    update(pageElement, configuration) {
      this.store.dispatch(pageUpdate(configuration.attributes));
      pageflow.commonPageCssClasses.updateCommonPageCssClasses(pageElement, configuration);
    },

    cleanup(pageElement) {
      ReactDOM.unmountComponentAtNode(pageElement[0]);
    }
  };
}
