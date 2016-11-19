import CurrentTime from '../CurrentTime';
import TimeDisplay from '../TimeDisplay';

import {shallow} from 'enzyme';
import {expect} from 'support/chai';

describe('CurrentTime', () => {
  it('displays currentTime prop', () => {
    const result = shallow(<CurrentTime currentTime={10} />);

    expect(result.find(TimeDisplay)).to.have.prop('value', 10);
  });
});
