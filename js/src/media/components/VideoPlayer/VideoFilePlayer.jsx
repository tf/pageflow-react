import React from 'react';

export default class VideoFilePlayer extends React.Component {
  constructor(props, context) {
    super(props, context);

    const actions = props.playerActions;

    this.updateAtmoSettings();

    this.bindPlayer = videoElement => {
      if (videoElement) {
        this.player = new pageflow.VideoPlayer(videoElement, {
          width: '100%',
          height: '100%',

          controls: false,
          bufferUnderrunWaiting: true,

          volumeFading: true,
          hooks: pageflow.atmo.createMediaPlayerHooks(this.atmoSettings),

          mediaEvents: true,
          context: this.context.mediaContext
        });

        this.player.on('loadedmetadata', () => actions.metaDataLoaded({
          duration: this.player.duration()
        }));

        this.player.on('play', actions.playing);
        this.player.on('pause', actions.paused);
        this.player.on('waiting', actions.waiting);
        this.player.on('seeking', actions.seeking);
        this.player.on('seeked', actions.seeked);
        this.player.on('bufferunderrun', actions.bufferUnderrun);

        this.player.on('timeupdate', () => actions.timeUpdate({
          currentTime: this.player.currentTime()
        }));

        this.player.on('ended', actions.ended);
      }
      else if (this.player) {
        this.player.dispose();
        this.player = null;
      }
    };
  }

  updateAtmoSettings() {
    this.atmoSettings = this.atmoSettings || {};
    this.atmoSettings['atmo_during_playback'] = this.props.atmoDuringPlayback;
  }

  componentWillReceiveProps(nextProps) {
    if (!this.player) {
      return;
    }

    const playerState = this.props.playerState;
    const nextPlayerState = nextProps.playerState;

    if (!playerState.shouldPrebuffer && nextPlayerState.shouldPrebuffer) {
      this.player.prebuffer().then(this.props.playerActions.prebuffered);
    }

    if (!playerState.shouldPlay && nextPlayerState.shouldPlay) {
      if (nextPlayerState.fadeDuration) {
        this.player.playAndFadeIn(nextPlayerState.fadeDuration);
      }
      else {
        this.player.play();
      }
    }
    else if (playerState.shouldPlay && !nextPlayerState.shouldPlay) {
      if (nextPlayerState.fadeDuration) {
        this.player.fadeOutAndPause(nextPlayerState.fadeDuration);
      }
      else {
        this.player.pause();
      }
    }

    if (nextPlayerState.shouldSeekTo && nextPlayerState.shouldSeekTo !== playerState.shouldSeekTo) {
      this.player.currentTime(nextPlayerState.shouldSeekTo);
    }

    this.updateAtmoSettings();
  }

  render() {
    const videoFile = this.props.videoFile;

    return (
      <video ref={this.bindPlayer} preload="auto" style={this.props.style}>
        <source type="video/webm" src={`${videoFile.urls.webm_medium}?u=1`} />
        <source type="application/x-mpegURL" src={`${videoFile.urls['hls-playlist']}?u=1`} />
        <source type="video/mp4" src={`${videoFile.urls.medium}?u=1`} />
      </video>
    );
  }
}

VideoFilePlayer.contextTypes = {
  mediaContext: React.PropTypes.object
};
