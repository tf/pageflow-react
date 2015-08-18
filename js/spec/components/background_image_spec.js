import BackgroundImage from 'components/background_image.jsx';

import renderComponent from '../support/render_component';

describe('BackgroundImage', () => {
  it('has background class css', () => {
    var backgroundImage = renderComponent(BackgroundImage, {imageFileId: 5});

    expect(backgroundImage.props.className.split(' ')).to.contain('background');
  });

  it('has background_image css class', () => {
    var backgroundImage = renderComponent(BackgroundImage, {imageFileId: 5});

    expect(backgroundImage.props.className.split(' ')).to.contain('background_image');
  });

  it('has image file css class', () => {
    var backgroundImage = renderComponent(BackgroundImage, {imageFileId: 5});

    expect(backgroundImage.props.className.split(' ')).to.contain('image_5');
  });

  it('has image_none css class if not imageFileId is given', () => {
    var backgroundImage = renderComponent(BackgroundImage);

    expect(backgroundImage.props.className.split(' ')).to.contain('image_none');
  });

  it('has load_image css class if loaded prop is present', () => {
    var backgroundImage = renderComponent(BackgroundImage, {loaded: true});

    expect(backgroundImage.props.className.split(' ')).to.contain('load_image');
  });
});
