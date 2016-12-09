import playerStateClassNames from './playerStateClassNames';
import PlayerControls from 'components/PlayerControls';
import {combine} from 'utils';

import {pageIsActive} from 'pages/selectors';
import {textTracks, videoQualitySetting} from 'media/selectors';
import {prop} from 'selectors';
import {t} from 'i18n/selectors';
import {updateTextTrackSettings, updateVideoQualitySetting} from 'media/actions';
import {connectInPage} from 'pages';

import React from 'react';
import classNames from 'classnames';

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

                    playButtonId={props.skipLinkTarget ? 'firstContent' : undefined}

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
                    onFocus={actions.controlsEntered}
                    onBlur={actions.controlsLeft}

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

export default connectInPage(
  combine({
    skipLinkTarget: pageIsActive(),
    textTracks: textTracks({
      file: prop('file')
    }),
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
  const noTextTrackItem = {
    value: -1,
    label: t('pageflow.public.none'),
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
  return qualities.filter(quality => (!!videoFile.urls[quality] || quality == 'auto'));
}
