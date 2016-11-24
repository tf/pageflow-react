import React from 'react';
import {DraggableCore} from 'react-draggable';

export default class ProgressSlider extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isScrubbing: false,
      scrubbingAt: false
    };

    this.bindProgressHolder = progressHolder => {
      this.progressHolder = progressHolder;
    };

    this.bindHandle = handle => {
      this.handle = handle;
    };

    this.handleStop = (mouseEvent, dragEvent) => {
      this.handleDrag(mouseEvent, dragEvent);
      this.setState({isScrubbing: false});
    };

    this.handleDrag = (mouseEvent, dragEvent) => {
      if (this.props.onSeek && this.props.duration && this.progressHolder) {
        const fraction = Math.max(0, Math.min(1, dragEvent.x / this.progressHolder.clientWidth));
        const scrubbingAt = fraction * this.props.duration;

        this.setState({scrubbingAt, isScrubbing: true});
        this.props.onSeek(scrubbingAt);
      }
    };
  }

  render() {
    const props = this.props;

    return (
      <div className="vjs-progress-control">
        <DraggableCore onStart={this.handleDrag}
                       onDrag={this.handleDrag}
                       onStop={this.handleStop}>
          <div className="vjs-progress-holder" ref={this.bindProgressHolder}>
            <div className="vjs-load-progress" style={{width: toPercent(props.loadProgress)}} />
            <div className="vjs-play-progress" style={{width: toPercent(this.playProgress())}} />
            <div className="vjs-seek-handle" ref={this.bindHandle} style={{left: this.handlePosition()}} />
          </div>
        </DraggableCore>
      </div>
    );
  }

  handlePosition() {
    if (this.handle && this.progressHolder) {
      return ((this.progressHolder.clientWidth - this.handle.clientWidth) * this.playProgress());
    }
    else {
      return toPercent(this.playProgress());
    }
  }

  playProgress() {
    const currentTime = (this.props.isSeeking || this.state.isScrubbing) ? this.state.scrubbingAt : this.props.currentTime;
    return this.props.duration > 0 ? (currentTime / this.props.duration) : 0;
  }
}

ProgressSlider.defaultProps = {
  currentTime: 0
};

function toPercent(value) {
  return value > 0 ? (value * 100) + '%' : 0;
}
