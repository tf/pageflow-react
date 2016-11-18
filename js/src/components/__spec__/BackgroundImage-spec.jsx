import BackgroundImage from '../BackgroundImage';

import {expect} from 'support/chai';
import {shallow, mount} from 'enzyme';

describe('BackgroundImage', () => {
  it('has image file css class', () => {
    const props = {imageFileId: 5};

    const result = shallow(<BackgroundImage {...props} />);

    expect(result).to.have.className('image_5');
  });

  it('has image_none css class if not imageFileId is given', () => {
    var result = shallow(<BackgroundImage />);

    expect(result).to.have.className('image_none');
  });

  it('has load_image css class if loaded prop is present', () => {
    const props = {imageFileId: 5, loaded: true};

    const result = shallow(<BackgroundImage {...props} />);

    expect(result).to.have.className('load_image');
  });

  it('has image file css class', () => {
    const props = {imageFileId: 5};

    const result = shallow(<BackgroundImage {...props} />);

    expect(result).to.have.className('image_5');
  });

  it('defaults background position to center', () => {
    const props = {imageFileId: 5};

    const result = mount(<BackgroundImage {...props} />);

    expect(result).to.style('backgroundPosition', '50% 50%');
  });

  it('defaults background position to center', () => {
    const props = {imageFileId: 5, position: [undefined, undefined]};

    const result = mount(<BackgroundImage {...props} />);

    expect(result).to.have.style('backgroundPosition', '50% 50%');
  });

  it('sets background position inline styles', () => {
    const props = {imageFileId: 5, position: [10, 20]};

    const result = mount(<BackgroundImage {...props} />);

    expect(result).to.have.style('backgroundPosition', '10% 20%');
  });
});
