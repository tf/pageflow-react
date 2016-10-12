import Resolver from './Resolver';

import camelize from '../utils/camelize';

/**
 * Turn a page type name given as `type` prop into an object providing
 * page type meta data. Registered as `"pageType"`.
 *
 * @alias pageflow.react.resolvers.PageTypeResolver
 * @class
 * @since 0.1
 */
export default class extends Resolver {
  get(props, seed) {
    return {
      name: props.type,
      ...camelize.deep(seed.page_types[props.type])
    };
  }
}
