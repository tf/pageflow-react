import Resolver from './Resolver';

export default class ObjectResolver extends Resolver {
  constructor(fragment, callback, propertyName) {
    super(callback);
    this._fragment = fragment;
    this._resolvers = {};
    this._propertyName = propertyName;
  }

  get(props, seed) {
    this._updateResolvers();

    if (this._propertyName) {
      props = props[this._propertyName];
    }

    if (!props) {
      return null;
    }

    return Object.keys(this._resolvers).reduce((result, key) => {
      const resolver = this._resolvers[key];

      result[key] = resolver.get(props, seed);
      return result;
    }, {...props});
  }

  dispose() {
    Object.keys(this._resolvers).forEach((key) => {
      this._resolvers[key].dispose();
    });
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
