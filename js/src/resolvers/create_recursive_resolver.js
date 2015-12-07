import ObjectResolver from './object_resolver';

export default function(Resolver) {
  return class {
    constructor(options, callback) {
      this._inner = new Resolver(options, callback);
      this._objectResolver = new ObjectResolver(options.fragments, callback);
    }

    get(props, seed) {
      const result = this._inner.get(props, seed);
      return this._objectResolver.get(result, seed);
    }
  }
};
