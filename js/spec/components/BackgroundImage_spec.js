import BackgroundImage from 'components/BackgroundImage';

import renderComponent from '../support/renderComponent';

describe('BackgroundImage', () => {
  it('has image file css class', () => {
    var backgroundImage = renderComponent(BackgroundImage, {imageFileId: 5});

    expect(backgroundImage.props.className.split(' ')).to.contain('image_5');
  });

  it('has image_none css class if not imageFileId is given', () => {
    var backgroundImage = renderComponent(BackgroundImage);

    expect(backgroundImage.props.className.split(' ')).to.contain('image_none');
  });

  it('has load_image css class if loaded prop is present', () => {
    var backgroundImage = renderComponent(BackgroundImage, {imageFileId: 5, loaded: true});

    expect(backgroundImage.props.className.split(' ')).to.contain('load_image');
  });

  it('has image file css class', () => {
    var backgroundImage = renderComponent(BackgroundImage, {imageFileId: 5});

    expect(backgroundImage.props.className.split(' ')).to.contain('image_5');
  });

  it('defaults background position to center', () => {
    var backgroundImage = renderComponent(BackgroundImage, {imageFileId: 5});

    expect(backgroundImage.props.style.backgroundPosition).to.eq('50% 50%');
  });

  it('defaults background position to center', () => {
    var backgroundImage = renderComponent(BackgroundImage, {imageFileId: 5, position: [undefined, undefined]});

    expect(backgroundImage.props.style.backgroundPosition).to.eq('50% 50%');
  });

  it('sets background position inline styles', () => {
    var backgroundImage = renderComponent(BackgroundImage, {imageFileId: 5, position: [10, 20]});

    expect(backgroundImage.props.style.backgroundPosition).to.eq('10% 20%');
  });
});
