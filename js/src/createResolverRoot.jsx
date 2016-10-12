import React from 'react';

export default function(Component) {
  class ResolverRoot extends React.Component {
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
  }

  ResolverRoot.childContextTypes = {
    resolverSeed: React.PropTypes.object
  };

  return ResolverRoot;
}
