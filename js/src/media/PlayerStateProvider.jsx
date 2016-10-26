import React from 'react';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import mediaReducer from './reducer';
import mediaSagas from './sagas';
import {pageWillActivate, pageDidActivate, pageWillDeactivate, pageDidDeactivate, pageUpdate} from './actions';

class PlayerStateProvider extends React.Component {
  constructor(props, context) {
    super(props, context);

    const sagaMiddleware = createSagaMiddleware();

    const initialState = {
      currentTime: 0,
      duration: 0,
      shouldPlay: false,
      isPlaying: false,
      pageConfiguration: props.page,
    };

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    this.store = createStore(mediaReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(mediaSagas, context.scrollIndicator);
  }

  componentWillReceiveProps(nextProps) {
    this.store.dispatch(pageUpdate(nextProps.page));
  }

  render() {
    return (
      <Provider store={this.store}>
        {this.props.children}
      </Provider>
    );
  }

  pageWillActivate() {
    this.store.dispatch(pageWillActivate());
  }

  pageDidActivate() {
    this.store.dispatch(pageDidActivate());
  }

  pageWillDeactivate() {
    this.store.dispatch(pageWillDeactivate());
  }

  pageDidDeactivate() {
    this.store.dispatch(pageDidDeactivate());
  }
}

PlayerStateProvider.contextTypes = {
  scrollIndicator: React.PropTypes.object
};

import withPageLifecycle from 'withPageLifecycle';

export default withPageLifecycle(PlayerStateProvider);
