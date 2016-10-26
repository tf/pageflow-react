import PlayerControls from 'components/PlayerControls';

import classNames from 'classnames';

function MediaPlayerControls(props) {
  const actions = props.playerState.actions;

  return (
    <PlayerControls hasProgress={true}
                    controlBarText={props.i18n.t('pageflow.public.start_video')}

                    isLoading={props.playerState.isLoading}
                    isPlaying={props.playerState.shouldPlay}
                    currentTime={props.playerState.currentTime}
                    duration={props.playerState.duration}
                    isScrubbing={props.playerState.isScrubbing}

                    onPlayButtonClick={actions.shouldTogglePlaying}
                    onSeekStart={actions.didStartScrubbing}
                    onSeek={actions.shouldSeekTo}
                    onSeekStop={actions.didStopScrubbing}

                    onMouseEnter={actions.enterControls}
                    onMouseLeave={actions.leaveControls}

                    {...props}

                    className={className(props)}/>
  );
}

function className(props) {
  return classNames(props.className, {
    'has_been_faded': props.playerState.userHasBeenIdle
  });
}

import createContainer from 'createContainer';
import withPlayerStateProp from './withPlayerStateProp';
import withPlayerStateClassNames from './withPlayerStateClassNames';
import resolve from 'resolve';

export default createContainer(withPlayerStateClassNames(withPlayerStateProp(MediaPlayerControls)), {
  fragments: {
    i18n: resolve('i18n')
  }
});
