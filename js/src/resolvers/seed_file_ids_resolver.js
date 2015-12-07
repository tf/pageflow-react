import Resolver from './resolver';

export default class extends Resolver {
  constructor(_, callback) {
    super(callback);
  }

  get(props, seed) {
    return seed.file_ids;
  }
};
