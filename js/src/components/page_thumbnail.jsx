import React from 'react';

import LazyBackgroundImage from './lazy_background_image.jsx';

export default class PageTumbnail extends React.Component {
  render() {
    return (
      <LazyBackgroundImage className="page_thumbnail"
                           imageFileId={this.imageFileId()} />
    );
  }

  imageFileId() {
    return this.props.customThumbnailId ||
           (this.props.page && this.props.page.thumbnail_image_id) ||
           (this.props.page && this.props.page.background_image_id) ||
           'none'
  }

  cssClass() {
    return _([
      'page_thumbnail',
      this.imageCssClass()
    ]).compact().join(' ');
  }

  imageCssClass() {
    return [
      'pageflow_image_file_link_thumbnail',
      (this.props.page && this.props.page.background_image_id) || 'none'
    ].join('_');
  }
};
