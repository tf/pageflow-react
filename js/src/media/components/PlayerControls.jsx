import playerStateClassNames from './playerStateClassNames';
import PlayerControls from 'components/PlayerControls';
import {combine} from 'utils';

import {videoQualitySetting} from 'media/selectors';
import {t} from 'i18n/selectors';
import {updateTextTrackSettings, updateVideoQualitySetting} from 'media/actions';

import React from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';

export function MediaPlayerControls(props) {
  const actions = props.playerActions;
  const playerState = props.playerState;

  const onTextTracksMenuItemClick = function(value) {
    if (value == 'off') {
      props.updateTextTrackSettings({
        kind: 'off'
      });
    }
    else {
      props.updateTextTrackSettings(props.textTracks.files.find(textTrackFile => {
        return textTrackFile.id == value;
      }));
    }
  };

  return (
    <PlayerControls hasProgress={true}
                    controlBarText={props.controlBarText}

                    isLoading={playerState.isLoading || playerState.bufferUnderrun}
                    isPlaying={playerState.shouldPlay}
                    currentTime={playerState.currentTime}
                    bufferedEnd={playerState.bufferedEnd}
                    duration={playerState.duration}
                    isScrubbing={playerState.isScrubbing}
                    isSeeking={playerState.isSeeking}

                    onPlayButtonClick={actions.togglePlaying}
                    onSeekStart={actions.scrubbingStarted}
                    onSeek={actions.seekTo}
                    onSeekEnd={actions.scrubbingEnded}

                    onMouseEnter={actions.controlsEntered}
                    onMouseLeave={actions.controlsLeft}
                    onFocus={actions.focusEnteredControls}
                    onBlur={actions.focusLeftControls}

                    qualityMenuItems={qualityMenuItems(props.qualities,
                                                       props.file,
                                                       props.activeQuality,
                                                       props.t)}

                    qualityMenuButtonTitle={props.t('pageflow.public.media_quality')}
                    onQualityMenuItemClick={props.updateVideoQualitySetting}

                    textTracksMenuItems={textTracksMenuItems(props.textTracks, props.t)}
                    textTracksMenuButtonTitle={props.t('pageflow.public.text_tracks')}
                    onTextTracksMenuItemClick={onTextTracksMenuItemClick}

                    {...props}

                    className={className(playerState)}/>
  );
}

MediaPlayerControls.defaultProps = {
  qualities: [],
  textTracks: {
    files: []
  }
};

export default connect(
  combine({
    activeQuality: videoQualitySetting(),
    t
  }),
  {
    updateTextTrackSettings,
    updateVideoQualitySetting
  }
)(MediaPlayerControls);

function className(playerState) {
  return classNames(playerStateClassNames(playerState),
                    {'has_been_faded': playerState.userHasBeenIdle});
}

function textTracksMenuItems(textTracks, t) {
  if (!textTracks.files.length) {
    return [];
  }

  const offItem = {
    value: 'off',
    label: t('pageflow.public.text_track_modes.none'),
    active: textTracks.mode == 'off'
  };

  const autoItem = {
    value: 'auto',
    label: t('pageflow.public.text_track_modes.auto'),
    active: textTracks.mode == 'auto'
  };

  return [autoItem, offItem].concat(textTracks.files.map(textTrackFile => {
    return {
      value: textTrackFile.id,
      label: textTrackFile.displayLabel,
      annotation: textTrackFile.isDefault ?
                  t('pageflow.public.text_track_modes.auto_annotation') : '',
      active: textTracks.mode == 'user' &&
              textTrackFile.id == textTracks.activeFileId,
    };
  }));
}

function qualityMenuItems(qualities, videoFile, activeQuality, t) {
  activeQuality = activeQuality || 'auto';

  return availableQualities(qualities, videoFile).map(value => ({
    value,
    label: t(`pageflow.public.video_qualities.labels.${value}`),
    annotation: t(`pageflow.public.video_qualities.annotations.${value}`,
                  {defaultValue: ''}),
    active: value == activeQuality
  }));
}

function availableQualities(qualities, videoFile) {
  if (!videoFile) {
    return [];
  }

  return qualities.filter(quality => (!!videoFile.urls[quality] || quality == 'auto'));
}
