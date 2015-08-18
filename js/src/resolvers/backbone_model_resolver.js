import Resolver from './resolver';

import _ from 'underscore';

/**
 * Resolve a foreign key to an object of attributes.
 */
export default class BackboneModelResolver extends Resolver {
  constructor(options, callback) {
    super(callback);
    this._options = _.extend({
      idAttribute: 'id',
      attributesForProps: ['id'],
      includeConfiguration: false
    }, options);
  }

  get(props) {
    this._updateModel(props);
    this._updateSubscription();

    return this._getPropsFromModel();
  }

  _updateModel(props) {
    this._prevModel = this._model;
    this._model = this._getModel(props);
  }

  _getModel(props) {
    var collection = this._options.collection();
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
    return _(this._options.attributesForProps)
                 .map((attribute) => `change:${attribute}`)
                 .join(' ');
  }

  _getPropsFromModel() {
    var props = null;
    var model = this._model;

    if (model) {
      props = model.pick(this._options.attributesForProps);

      if (this._options.includeConfiguration) {
        _.extend(props, model.configuration.attributes);
      }
    }

    return props;
  }
};
