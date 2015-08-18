import Resolver from './resolver';

import _ from 'underscore';

/**
 * Resolves a foreign key to an object of attributes from the seed
 * data.
 */
export default class SeedResolver extends Resolver {
  constructor(options, callback) {
    super(callback);
    this._options = _.extend({
      idAttribute: 'id',
      attributesForProps: ['id'],
      includeConfiguration: false
    }, options);

    this._attributesById = _(this._options.seed()).reduce((result, attributes) => {
      var id = attributes[this._options.idAttribute];
      result[id] = attributes;
      return result;
    }, {});
  }

  get(props) {
    var attributes = this._getAttributes(props);
    return this._getProps(attributes);
  }

  _getAttributes(props) {
    return this._attributesById[this._getModelId(props)];
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
      _.extend(props, attributes.configuration);
    }

    return props;
  }

  _getPropsFromAttributes(attributes) {
    return _(this._options.attributesForProps).reduce((result, name) => {
      if (typeof name === 'string') {
        result[name] = attributes[name];
      }
      else {
        _(name).each((name, key) => {
          result[key] = attributes[name];
        })
      }

      return result;
    }, {})
  }
};
