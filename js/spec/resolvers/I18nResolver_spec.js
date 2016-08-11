import I18nResolver from 'resolvers/I18nResolver';

import sinon from 'sinon';

describe('I18nResolver', () => {
  it('provides translate function for entry locale', () => {
    window.I18n = {
      t: sinon.spy()
    };

    var seed = {
      locale: 'fr'
    };
    var resolver = new I18nResolver();

    resolver.get({}, seed).t('some.key');

    expect(I18n.t).to.have.been.calledWith('some.key', {locale: 'fr'});
  });
});
