import Duration from 'components/PlayerControls/Duration';
import TimeDisplay from 'components/PlayerControls/TimeDisplay';

import {shallow} from 'enzyme';
import {expect} from 'support/chai';

describe('Duration', () => {
  it('displays duration prop', () => {
    const result = shallow(<Duration duration={10} />);

    expect(result.find(TimeDisplay)).to.have.prop('value', 10);
  });
});
