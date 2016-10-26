import TimeDisplay from 'components/PlayerControls/TimeDisplay';

import {shallow} from 'enzyme';
import {expect} from 'support/chai';

describe('TimeDisplay', () => {
  it('applies className prop', () => {
    const result = shallow(<TimeDisplay className="some_class" />);

    expect(result).to.have.className('some_class');
  });

  it('formats value passed as seconds', () => {
    const result = shallow(<TimeDisplay value={10.45} />);

    expect(result).to.have.text('0:10');
  });

  it('pads seconds', () => {
    const result = shallow(<TimeDisplay value={5} />);

    expect(result).to.have.text('0:05');
  });

  it('dispalys hours', () => {
    const result = shallow(<TimeDisplay value={65 * 60} />);

    expect(result).to.have.text('1:05:00');
  });
});
