import React from 'react';

export default function(Component) {
  return class extends React.Component {
    static contextTypes = {
      pageHooks: React.PropTypes.object
    }

    componentDidMount() {
      var component = this.refs.component;

      this.context.pageHooks.on({
        preload: () => {
          trigger('pageWillPreload');
        },

        activating: (options) => {
          trigger('pageWillActivate', options);
        },

        activated: () => {
          trigger('pageDidActivate');
        },

        deactivating: () => {
          trigger('pageDidDeactivate');
        }
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
};
