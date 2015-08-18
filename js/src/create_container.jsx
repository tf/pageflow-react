import React from 'react';

import ObjectResolver from './resolvers/object_resolver';

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
    constructor(props) {
      super(props);

      this._resolver = new ObjectResolver(
        options.fragments,
        this._handleChange.bind(this)
      );

      this.state = this._resolver.get(props);
    }

    componentWillReceiveProps(nextProps) {
      this.setState(this._resolver.get(nextProps));
    }

    _handleChange() {
      this.setState(this._resolver.get(this.props));
    }

    render() {
      return (<Component {...this.state} ref="component" />);
    }
  };

};
