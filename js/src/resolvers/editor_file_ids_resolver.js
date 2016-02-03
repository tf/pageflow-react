import Resolver from './resolver';

export default class extends Resolver {
  constructor(options, callback) {
    super(callback);
    this._options = {
      collections: () => pageflow.files,
      ...options
    };

    Object.values(this._options.collections()).forEach((collection) =>
      collection.on('remove', this._handleChange, this)
    );
  }

  get() {
    var files = this._options.collections();

    return Object.keys(files).reduce((result, collectionName) => {
      result[collectionName] = files[collectionName].map((file) => file.id);
      return result;
    }, {});
  }

  dispose() {
    Object.values(this._options.collections()).forEach((collection) =>
      collection.off('remove', this._handleChange, this)
    );
  }
};
