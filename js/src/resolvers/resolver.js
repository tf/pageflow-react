export default class Resolver {
  constructor(callback) {
    this._callback = callback;
  }

  get(props) {}

  dispose() {}

  /** @protected */
  _handleChange() {
    if (this._callback) {
      this._callback();
    }
  }
}
