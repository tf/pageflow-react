import Resolver from './Resolver';
import createRecursiveResolver from './createRecursiveResolver';

import camelize from '../utils/camelize';
import Backbone from 'backbone';

/**
 * Resolve a foreign key to an object of attributes.
 */
class BackboneModelResolver extends Resolver {
  constructor(options, callback) {
    super(callback);
    this._options = {
      idAttribute: 'id',
      attributesForProps: ['id'],
      includeConfiguration: false,
      ...options
    };

    if (!this._options.collection) {
      throw new Error('Required option collection missing.');
    }

    if (!this._options.property) {
      throw new Error('Required option property missing.');
    }
  }

  get(props, seed) {
    this._updateModel(props, seed || {});
    this._updateSubscription();

    return this._getPropsFromModel();
  }

  dispose() {
    if (this._model) {
      this._stopListening(this._model);
    }
  }

  _updateModel(props, seed) {
    this._prevModel = this._model;
    this._model = this._getModel(props, seed);
  }

  _getModel(props, seed) {
    var collection = this._options.collection();

    if (!(collection instanceof Backbone.Collection)) {
      throw new Error(`Expected collection option to return a Backbone.Collection but got ${collection}`);
    }

    return collection.findWhere(this._getIdConditions(props));
  }

  _getIdConditions(props) {
    var conditions = {};
    conditions[this._options.idAttribute] = this._getModelId(props);
    return conditions;
  }

  _getModelId(props) {
    return props[this._options.property];
  }

  _updateSubscription() {
    if (this._prevModel === this._model) {
      return;
    }

    if (this._prevModel) {
      this._stopListening(this._prevModel);
    }

    if (this._model) {
      this._startListening(this._model);
    }
  }

  _startListening(model) {
    model.on(this._getSubscribedEvents(), this._handleChange, this);

    if (this._options.includeConfiguration) {
      model.configuration.on('change', this._handleChange, this);
    }
  }

  _stopListening(model) {
    model.off(null, null, this);

    if (this._options.includeConfiguration) {
      model.configuration.off('change', this._handleChange, this);
    }
  }

  _getSubscribedEvents() {
    return this._options.attributesForProps
               .map((attribute) => `change:${attribute}`)
               .concat(['remove'])
               .join(' ');
  }

  _getPropsFromModel() {
    var props = null;
    var model = this._model;

    if (model) {
      props = this._getPropsFromAttributes();

      if (this._options.includeConfiguration) {
        Object.assign(props, camelize.deep(model.configuration.attributes))
      }
    }

    return props;
  }

  _getPropsFromAttributes() {
    var model = this._model;

    return this._options.attributesForProps.reduce((result, name) => {
      if (typeof name === 'string') {
        name = [camelize(name), name];
      }

      result[name[0]] = model.get(name[1]);
      return result;
    }, {})
  }
};

export default createRecursiveResolver(BackboneModelResolver);
