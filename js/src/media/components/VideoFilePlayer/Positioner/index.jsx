import getDimensions from './getDimensions';
import getCueOffsetClassName from './getCueOffsetClassName';

import React from 'react';

export default class Positioner extends React.Component {
  constructor(props, state) {
    super(props, state);
    this.state = {};

    this.bindWrapper = wrapper => {
      this.wrapper = wrapper;

      if (wrapper) {
        pageflow.events.on('resize', this.measure);
        this.measure();
      }
      else {
        pageflow.events.off('resize', this.measure);
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
    const dimensions = getDimensions(this.props.videoFile,
                                     this.props.fit,
                                     this.props.position,
                                     this.state.wrapperDimensions);

    return (
      <div ref={this.bindWrapper} className="videoWrapper">
        <div className={getCueOffsetClassName(dimensions, this.state.wrapperDimensions)}
             style={style(dimensions)}>
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

function style(dimensions) {
  return dimensions && {
    position: 'absolute',
    ...dimensions
  };
}
