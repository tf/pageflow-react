import MediaTag from './MediaTag';
import createPageflowPlayer from './createPageflowPlayer';
import watchPlayer from './watchPlayer';
import handlePlayStatePropChanges from './handlePlayStatePropChanges';
import {textTracksFromFiles, updateTextTrackModes} from './textTracks';

import {textTracks} from 'media/selectors';
import {setting} from 'settings/selectors';
import {prop} from 'selectors';

import React from 'react';
import {combine} from 'utils';
import {connect} from 'react-redux';

export default function({
  tagName,
  sources,
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

        watchPlayer(this.player, this.props.playerActions);
        updateTextTrackModes(this.player, this.props.textTracks.activeFileId);
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
      quality: setting({property: 'videoQuality'})
    })
  )(FilePlayer);

  result.WrappedComponent = FilePlayer;

  return result;
}