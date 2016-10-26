
import VideoFilePlayer from './VideoFilePlayer';

import React from 'react';
import createContainer from 'createContainer';
import resolve from 'resolve';

class VideoPlayer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};

    this.bindWrapper = wrapper => {
      this.wrapper = wrapper;
      this.measureWrapper();
    };
  }

  render() {
    return (
      <div className="videoWrapper" ref={this.bindWrapper}>
        {this.renderVideoFile()}
      </div>
    );
  }

  pageDidResize() {
    this.measureWrapper();
  }

  renderVideoFile() {
    const videoFile = this.props.videoFile;

    if (videoFile) {
      return (
        <VideoFilePlayer videoFile={videoFile} style={this.style()} />
      );
    }
  }

  measureWrapper() {
    if (this.wrapper) {
      this.setState({
        wrapperWidth: this.wrapper.clientWidth,
        wrapperHeight: this.wrapper.clientHeight,
      });
    }
  }

  style() {
    const {wrapperWidth, wrapperHeight} = this.state;
    const videoFile = this.props.videoFile;

    if (this.props.size == 'cover' && wrapperWidth && wrapperHeight) {
      const ratioX = wrapperWidth / videoFile.width;
      const ratioY = wrapperHeight / videoFile.height;
      const factor = Math.max(ratioX, ratioY);

      const width = videoFile.width * factor;
      const height = videoFile.height * factor;

      return {
        position: 'absolute',
        left: (wrapperWidth - width) * this.props.position[0] / 100,
        top: (wrapperHeight - height) * this.props.position[1] / 100,
        width: width,
        height: height,
      };
    }
  }
}

VideoPlayer.defaultProps = {
  position: [50, 50]
};

import withPageLifecycle from 'withPageLifecycle';

export default createContainer(withPageLifecycle(VideoPlayer), {
  fragments: {
    videoFile: resolve('videoFile', {property: 'videoFileId'})
  }
});
