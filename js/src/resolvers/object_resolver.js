import Resolver from './resolver';
import _ from 'underscore';

export default class ObjectResolver extends Resolver {
  constructor(fragment, callback, p) {
    super(callback);
    this._fragment = fragment;
    this._resolvers = {};
    this._p = p;
  }

  get(props) {
    this._updateResolvers();

    if (this._p) {
      props = props[this._p];
    }

    return _(this._resolvers).reduce((result, resolver, key) => {
      result[key] = resolver.get(props);
      return result;
    }, _(props).clone());
  }

  _updateResolvers() {
    var resolvers = this._resolvers;

    _(this._fragment).each((resolverProvider, key) => {
      if (!resolvers[key]) {
        resolvers[key] = this._createResolver(resolverProvider, key);
      }
    });
  }

  _createResolver(provider, key) {
    var handleChange = this._handleChange.bind(this);

    if (typeof provider === 'object') {
      return new ObjectResolver(provider, handleChange, key);
    }
    else {
      return provider(handleChange);
    }
  }
}
