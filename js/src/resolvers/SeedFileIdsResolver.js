import Resolver from './Resolver';

export default class extends Resolver {
  constructor(_, callback) {
    super(callback);
  }

  get(props, seed) {
    return seed.file_ids;
  }
};
