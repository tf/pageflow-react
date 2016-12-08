import {prop} from '../selectors';

import {expect} from 'support/chai';

describe('prop selector', () => {
  it('returns prop with given name', () => {
    const state = {};
    const props = {label: 'Text'};

    const result = prop('label')(state, props);

    expect(result).to.eq('Text');
  });

  it('supports path lookup', () => {
    const state = {};
    const props = {nested: {label: 'Text'}};

    const result = prop('nested.label')(state, props);

    expect(result).to.eq('Text');
  });

  it('throws error if top level prop is missing', () => {
    const state = {};
    const props = {};

    expect(() => {
      prop('label')(state, props);
    }).to.throw(/Missing required prop/);
  });

  it('returns undefined if nested prop is missing', () => {
    const state = {};
    const props = {nested: {}};

    const result = prop('nested.not.there')(state, props);

    expect(result).to.eq(undefined);
  });
});
