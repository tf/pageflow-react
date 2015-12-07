import Resolver from './resolver';

export default class ObjectResolver extends Resolver {
  constructor(fragment, callback, p) {
    super(callback);
    this._fragment = fragment;
    this._resolvers = {};
    this._p = p;
  }

  get(props, seed) {
    this._updateResolvers();

    if (!props) {
      return null;
    }

    if (this._p) {
      props = props[this._p];
    }

    return Object.keys(this._resolvers).reduce((result, key) => {
      const resolver = this._resolvers[key];

      result[key] = resolver.get(props, seed);
      return result;
    }, {...props});
  }

  _updateResolvers() {
    var resolvers = this._resolvers;

    Object.keys(this._fragment || {}).forEach((key) => {
      const resolverProvider = this._fragment[key];

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
