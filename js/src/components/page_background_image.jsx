import React from 'react';

import LazyBackgroundImage from './lazy_background_image.jsx';

export default class PageBackgroundImage extends React.Component {
  render() {
    return (
      <LazyBackgroundImage imageFileId={this.props.page.backgroundImageId}
                           className="background background_image" />
    );
  }
};
