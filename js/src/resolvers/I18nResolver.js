import Resolver from './Resolver';

/**
 * Resolve to an `I18n` object with a `t` method, which can be used to
 * look up translations. Registered as `"i18n"`.
 *
 * @alias pageflow.react.resolvers.I18nResolver
 * @class
 * @since 0.1
 */
export default class extends Resolver {
  get(props, seed) {
    return {
      t: function(key, options) {
        return I18n.t(key, {locale: seed.locale, ...options});
      }
    };
  }
}
