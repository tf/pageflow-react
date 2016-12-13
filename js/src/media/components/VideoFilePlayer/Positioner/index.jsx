import getDimensions from './getDimensions';

import React from 'react';

export default class Positioner extends React.Component {
  constructor(props, state) {
    super(props, state);
    this.state = {};

    this.bindWrapper = wrapper => {
      this.wrapper = wrapper;

      if (wrapper) {
        window.addEventListener('resize', this.measure);
        this.measure();
      }
      else {
        window.removeEventListener('resize', this.measure);
      }

    };

    this.measure = () => {
      this.setState({
        wrapperDimensions: {
          width: this.wrapper.clientWidth,
          height: this.wrapper.clientHeight
        }
      });
    };
  }

  render() {
    return (
      <div ref={this.bindWrapper} className="videoWrapper">
        <div style={style(this.props.videoFile,
                          this.props.fit,
                          this.props.position,
                          this.state.wrapperDimensions)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Positioner.propTypes = {
  videoFile: React.PropTypes.object,
  fit: React.PropTypes.oneOf(['contain', 'cover', 'smart_contain']),
  position: React.PropTypes.arrayOf(React.PropTypes.number)
};

function style(videoFile, fit, position, wrapperDimensions) {
  const dimensions = getDimensions(videoFile, fit, position, wrapperDimensions);

  return dimensions && {
    position: 'absolute',
    ...dimensions
  };
}
