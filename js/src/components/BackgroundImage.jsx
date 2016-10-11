import React from 'react';
import classNames from 'classnames';

/**
 * Display an element with a background image.
 *
 * @memberof pageflow.react.components
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

BackgroundImage.propTypes = {
  /** The id of the image file to display */
  imageFileId: React.PropTypes.number,

  /** Background position */
  position: React.PropTypes.arrayOf(React.PropTypes.number),

  /** Additional CSS classes. */
  className: React.PropTypes.string,

  /** Used to lazy load images. */
  loaded: React.PropTypes.bool
};

BackgroundImage.defaultProps = {
  position: [50, 50]
};

export default BackgroundImage;
