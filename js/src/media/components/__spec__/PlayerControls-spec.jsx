import {MediaPlayerControls as PlayerControls} from '../PlayerControls';

import {expect} from 'support/chai';
import {shallow} from 'enzyme';

describe('PlayerControls', () => {
  it('renders ok', () => {
    const props = {
      playerState: {},
      playerActions: {}
    };

    const result = shallow(<PlayerControls {...props} />);

    expect(result).to.be.ok;
  });
});
