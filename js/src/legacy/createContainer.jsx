import React from 'react';

import ObjectResolver from './resolvers/ObjectResolver';

/**
 * Create a wrapper component which renders the given component
 * passing additional props which are retrieved via resolvers.
 *
 * @param {React.Component} Component
 *   The constructor of the component for which a wrapper shall be
 *   created.
 *
 * @param {Object} options.fragments [{}]
 *   An object mapping prop names to resolvers and mutations.
 *
 * @param {Object} options.editorOnly [false]
 *   Do not render the component outside of the editor. Can be used
 *   for in place editing components that shall only be available
 *   in the editor.
 *
 * @return {React.Component}
 *
 * @alias pageflow.react.createContainer
 * @since 0.1
 */
export default function(Component, options) {
  options = options || {};

  if (options.editorOnly && !PAGEFLOW_EDITOR) {
    return class extends React.Component {
      render() {
        return false;
      }
    };
  }

  class Container extends React.Component {
    constructor(props, context) {
      super(props, context);

      this._resolver = new ObjectResolver(
        options.fragments,
        this._handleChange.bind(this)
      );

      this.state = this._resolve(props);
    }

    componentWillReceiveProps(nextProps) {
      this.setState(this._resolve(nextProps));
    }

    componentWillUnmount() {
      this._resolver.dispose();
    }

    _handleChange() {
      this.setState(this._resolve(this.props));
    }

    _resolve(props) {
      return this._resolver.get(props, this.context.resolverSeed);
    }

    render() {
      return (<Component {...this.state} />);
    }
  }

  Container.contextTypes = {
    resolverSeed: React.PropTypes.object
  };

  return Container;
}
