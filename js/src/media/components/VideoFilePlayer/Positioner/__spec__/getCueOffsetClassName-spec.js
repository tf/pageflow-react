import getCueOffsetClassName from '../getCueOffsetClassName';

import {expect} from 'support/chai';

describe('getCueOffsetClassName', () => {
  it('returns css class for offset', () => {
    const videoDimensions = {height: 130, top: -10};
    const wrapperDimensions = {height: 100};

    const result = getCueOffsetClassName(videoDimensions, wrapperDimensions);

    expect(result).to.eq('cue_offset cue_offset_2');
  });
});
