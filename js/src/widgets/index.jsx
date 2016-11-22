import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

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
