import reducer from './reducer';

import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {load} from './actions';

export const reducers = {widgets: reducer};

export function createWidgetType(Component, store) {
  return {
    enhance: function(element) {
      ReactDOM.render(
        <Provider store={store}>
          <Component />
        </Provider>,
        element[0]
      );
    }
  };
}

export function watch(events, widgets, dispatch) {
  function update() {
    dispatch(load({
      widgets: {
        classicPlayerControls: widgets.isPresent('classic_player_controls'),
        slimPlayerControls: widgets.isPresent('slim_player_controls')
      }
    }));
  }

  events.on('widgets:update', update);
  update();
}
