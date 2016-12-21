import MediaTag from './MediaTag';
import createPageflowPlayer from './createPageflowPlayer';
import watchPlayer from './watchPlayer';
import handlePlayStatePropChanges from './handlePlayStatePropChanges';
import {textTracksFromFiles, updateTextTrackModes, updateTextTrackPosition} from './textTracks';

import {textTracks} from 'media/selectors';
import {setting} from 'settings/selectors';
import {widgetPresent} from 'widgets/selectors';
import {prop} from 'selectors';

import React from 'react';
import {combine} from 'utils';
import {connect} from 'react-redux';

export default function({
  tagName,
  sources,
  poster = () => {},
  emulateTextTracksDisplay = false,
  createPlayer = createPageflowPlayer
}) {
  class FilePlayer extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.updateAtmoSettings();

      this.setupMediaTag = element => {
        this.player = createPlayer(element, {
          emulateTextTracksDisplay,
          atmoSettings: this.atmoSettings,
          mediaContext: this.context.mediaContext
        });

        if (this.props.playerState.currentTime > 0) {
          this.player.currentTime(this.props.playerState.currentTime);
        }

        if (this.props.playerState.isPlaying) {
          this.player.play();
        }

        watchPlayer(this.player, this.props.playerActions);
        updateTextTrackModes(this.player, this.props.textTracks.activeFileId);
        updateTextTrackPosition(this.player, this.props.textTrackPosition);
      };

      this.disposeMediaTag = () => {
        this.player.dispose();
        this.player = null;
      };
    }

    componentDidUpdate(prevProps) {
      if (!this.player) {
        return;
      }

      handlePlayStatePropChanges(this.player,
                                 prevProps.playerState,
                                 this.props.playerState,
                                 this.props.playerActions);

      if (prevProps.textTrackPosition !== this.props.textTrackPosition) {
        updateTextTrackPosition(this.player, this.props.textTrackPosition);
      }

      updateTextTrackModes(this.player, this.props.textTracks.activeFileId);
      this.updateAtmoSettings();
    }

    updateAtmoSettings() {
      this.atmoSettings = this.atmoSettings || {};
      this.atmoSettings['atmo_during_playback'] = this.props.atmoDuringPlayback;
    }

    render() {
      return (
        <MediaTag tagName={tagName}

                  sources={sources(this.props.file, this.props.quality)}
                  tracks={textTracksFromFiles(this.props.textTracks.files,
                                              this.props.textTracksEnabled)}
                  poster={poster(this.props.file, this.props.posterImageFile)}

                  onSetup={this.setupMediaTag}
                  onDispose={this.disposeMediaTag} />
      );
    }
  }

  FilePlayer.contextTypes = {
    mediaContext: React.PropTypes.object
  };

  FilePlayer.defaultProps = {
    textTracksEnabled: true,
    textTracks: {
      files: []
    }
  };

  FilePlayer.propTypes = {
    file: React.PropTypes.object.isRequired
  };

  const result = connect(
    combine({
      textTracks: textTracks({
        file: prop('file')
      }),
      quality: setting({property: 'videoQuality'}),
      textTrackPosition
    })
  )(FilePlayer);

  result.WrappedComponent = FilePlayer;

  return result;
}

const classicPlayerControlsPresent = widgetPresent('classicPlayerControls');

function textTrackPosition(state, {playerState}) {
  if (classicPlayerControlsPresent(state) && !playerState.controlsHidden) {
    return 'top';
  }

  return 'auto';
}
