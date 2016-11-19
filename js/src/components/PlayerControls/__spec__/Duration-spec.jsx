import Duration from '../Duration';
import TimeDisplay from '../TimeDisplay';

import {shallow} from 'enzyme';
import {expect} from 'support/chai';

describe('Duration', () => {
  it('displays duration prop', () => {
    const result = shallow(<Duration duration={10} />);

    expect(result.find(TimeDisplay)).to.have.prop('value', 10);
  });
});
