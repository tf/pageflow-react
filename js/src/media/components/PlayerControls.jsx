import playerStateClassNames from './playerStateClassNames';
import PlayerControls from 'components/PlayerControls';
import {combine} from 'utils';

import {textTracks} from 'media/selectors';
import {prop} from 'selectors';
import {updateTextTrackSettings} from 'media/actions';

import React from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';

export function MediaPlayerControls(props) {
  const actions = props.playerActions;
  const playerState = props.playerState;

  const onTextTracksMenuItemClick = function(textTrackFileId) {
    props.updateTextTrackSettings(props.textTracks.files.find(textTrackFile => {
      return textTrackFile.id == textTrackFileId;
    }
    ));
  };

  return (
    <PlayerControls hasProgress={true}
                    controlBarText={props.controlBarText}

                    isLoading={playerState.isLoading}
                    isPlaying={playerState.shouldPlay}
                    currentTime={playerState.currentTime}
                    duration={playerState.duration}
                    isScrubbing={playerState.isScrubbing}
                    isSeeking={playerState.isSeeking}

                    onPlayButtonClick={actions.togglePlaying}
                    onSeekStart={actions.scrubbingStarted}
                    onSeek={actions.seekTo}
                    onSeekEnd={actions.scrubbingEnded}

                    onMouseEnter={actions.controlsEntered}
                    onMouseLeave={actions.controlsLeft}

                    textTracksMenuItems={textTracksMenuItems(props.textTracks)}
                    onTextTracksMenuItemClick={onTextTracksMenuItemClick}

                    {...props}

                    className={className(playerState)}/>
  );
}

MediaPlayerControls.defaultProps = {
  textTracks: {
    files: []
  }
};

export default connect(
  combine({
    textTracks: textTracks({
      file: prop('file')
    })
  }),
  {
    updateTextTrackSettings
  }
)(MediaPlayerControls);

function className(playerState) {
  return classNames(playerStateClassNames(playerState),
                    {'has_been_faded': playerState.userHasBeenIdle});
}

function textTracksMenuItems(textTracks) {
  const noTextTrackItem = {
    value: -1,
    label: '(Kein)',
    active: !textTracks.activeFileId
  };

  return [noTextTrackItem].concat(textTracks.files.map(textTrackFile => {
    return {
      value: textTrackFile.id,
      label: textTrackFile.label,
      active: textTrackFile.id == textTracks.activeFileId,
    };
  }));
}
