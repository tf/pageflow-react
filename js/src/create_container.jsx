import React from 'react';

import ObjectResolver from './resolvers/ObjectResolver';

export default function(Component, options) {
  options = options || {};

  if (options.editorOnly && !PAGEFLOW_EDITOR) {
    return class extends React.Component {
      render() {
        return false;
      }
    };
  }

  return class extends React.Component {
    static contextTypes = {
      resolverSeed: React.PropTypes.object
    }

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
  };

};
