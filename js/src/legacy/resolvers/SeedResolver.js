import Resolver from './Resolver';
import createRecursiveResolver from './createRecursiveResolver';

import camelize from 'utils/camelize';

class SeedResolver extends Resolver {
  constructor(options, callback) {
    super(callback);

    this._options = {
      idAttribute: 'id',
      attributesForProps: ['id'],
      includeConfiguration: false,
      ...options
    };
  }

  get(props, seed) {
    var attributes = this._getAttributes(props, seed);
    return this._getProps(attributes);
  }

  _getAttributes(props, seed) {
    return this._getAttributesById(this._getModelId(props), seed);
  }

  _getAttributesById(id, seed) {
    const collection = seed[this._options.seedProperty];

    if (!collection) {
      return null;
    }

    return collection.find((attributes) => {
      return attributes[this._options.idAttribute] === id;
    });
  }

  _getModelId(props) {
    return props[this._options.property];
  }

  _getProps(attributes) {
    var props;

    if (!attributes) {
      return null;
    }

    props = this._getPropsFromAttributes(attributes);

    if (this._options.includeConfiguration) {
      Object.assign(props, camelize.deep(attributes.configuration));
    }

    return props;
  }

  _getPropsFromAttributes(attributes) {
    return this._options.attributesForProps.reduce((result, name) => {
      if (typeof name === 'string') {
        name = [camelize(name), name];
      }

      result[name[0]] = attributes[name[1]];
      return result;
    }, {})
  }
};

export default createRecursiveResolver(SeedResolver);
