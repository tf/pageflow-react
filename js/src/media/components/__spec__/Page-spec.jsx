import Page from '../Page';

import {expect} from 'support/chai';
import {shallow} from 'enzyme';

describe('Page', () => {
  it('renders ok', () => {
    const props ={
      page: {},
      playerState: {}
    };

    const result = shallow(<Page {...props} />);

    expect(result).to.be.ok;
  });
});
