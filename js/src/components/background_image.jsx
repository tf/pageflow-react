import React from 'react';
import _ from 'underscore';

export default class BackgroundImage extends React.Component {
  render() {
    return (
      <div className={this.cssClass()}>
      </div>
    );
  }

  cssClass() {
    return _([this.props.className,
              this.props.loaded ? 'load_image' : null,
              this.imageCssClass()
    ]).compact().join(' ');
  }

  imageCssClass() {
    return ['image', this.props.imageFileId || 'none'].join('_');
  }
};

