import React from 'react';

export default function(Component) {
  return class extends React.Component {
    static childContextTypes = {
      resolverSeed: React.PropTypes.object
    }

    getChildContext() {
      return {
        resolverSeed: this.props.resolverSeed || {}
      };
    }

    render() {
      return (
        <Component {...this.props} />
      );
    }
  };
};
