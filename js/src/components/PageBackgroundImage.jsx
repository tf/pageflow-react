import React from 'react';

import LazyBackgroundImage from './LazyBackgroundImage';

export default class PageBackgroundImage extends React.Component {
  render() {
    const page = this.props.page;
    const property = this.props.imagePropertyBaseName;

    return (
      <LazyBackgroundImage imageFileId={page[`${property}Id`]}
                           position={[page[`${property}X`], page[`${property}Y`]]}
                           className="background background_image" />
    );
  }
}

PageBackgroundImage.defaultProps = {
  imagePropertyBaseName: 'backgroundImage'
};
