import Resolver from './Resolver';

export default class extends Resolver {
  get(props, seed) {
    return {
      t: function(key, options) {
        return I18n.t(key, {locale: seed.locale, ...options});
      }
    };
  }
}
