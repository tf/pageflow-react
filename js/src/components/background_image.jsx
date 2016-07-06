import React from 'react';
import classNames from 'classnames';

/**
 * Display an element with a background image.
 */
class BackgroundImage extends React.Component {
  render() {
    return (
      <div className={this.cssClass()} style={this.style()}>
      </div>
    );
  }

  cssClass() {
    return classNames(
      this.props.className,
      this.props.loaded ? 'load_image' : null,
      this.imageCssClass()
    );
  }

  imageCssClass() {
    return ['image', this.props.imageFileId || 'none'].join('_');
  }

  style() {
    return {
      backgroundPosition: `${this.positionCoordinate(0)}% ${this.positionCoordinate(1)}%`
    };
  }

  positionCoordinate(index) {
    var coordinate = this.props.position[index];

    if (typeof coordinate === 'undefined') {
      return 50;
    }

    return coordinate;
  }
}

/**
 * @property {String} imageFileId
 *   The id of the image file to display.
 *
 * @property {String} position
 *   Background position.
 *
 * @property {String} className
 *   Additional CSS classes.
 *
 * @property {Boolean} loaded
 *   Used to lazy load images.
 */
BackgroundImage.propTypes = {
  imageFileId: React.PropTypes.number,
  position: React.PropTypes.arrayOf(React.PropTypes.number),
  className: React.PropTypes.string,
  loaded: React.PropTypes.bool
};

BackgroundImage.defaultProps = {
  position: [50, 50]
};

export default BackgroundImage;
