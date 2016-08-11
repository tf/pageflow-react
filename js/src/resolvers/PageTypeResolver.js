import Resolver from './Resolver';

import camelize from '../utils/camelize';

export default class extends Resolver {
  get(props, seed) {
    return {
      name: props.type,
      ...camelize.deep(seed.page_types[props.type])
    };
  }
}
