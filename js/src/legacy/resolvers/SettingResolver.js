import Resolver from './Resolver';

export default class SettingResolver extends Resolver {
  constructor(options, callback) {
    super(callback);

    if (!options.property) {
      throw new Error('SettingResolver requires a property option.');
    }

    this.property = options.property;
    this.model = options.model || pageflow.settings;
  }

  get(props, seed) {
    if (this.model) {
      this.model.on(`change:${this.property}`, this._handleChange, this);
      return this.model.get(this.property);
    }
  }

  dispose() {
    if (this.model) {
      this.model.off(null, null, this);
    }
  }
}
