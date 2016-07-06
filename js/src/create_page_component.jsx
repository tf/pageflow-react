import React from 'react';

export default function(Component) {
  class PageComponent extends React.Component {
    componentDidMount() {
      var component = this.refs.component;

      this.context.pageHooks.on({
        activating: (options) => {
          trigger('pageWillActivate', options);
        },

        activated: () => {
          trigger('pageDidActivate');
        },

        deactivating: () => {
          trigger('pageDidDeactivate');
        },

        resize: () => {
          trigger('pageDidResize');
        },
      }, this);

      function trigger(name, options) {
        if (typeof component[name] === 'function') {
          component[name].call(component, options);
        }
      }
    }

    componentWillUnmount() {
      this.context.pageHooks.off(null, null, this);
    }

    render() {
      return (<Component {...this.props} ref="component" />);
    }
  }

  PageComponent.contextTypes = {
    pageHooks: React.PropTypes.object
  };

  return PageComponent;
};
