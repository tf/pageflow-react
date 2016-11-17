import playerStateClassNames from './playerStateClassNames';
import PlayerControls from 'components/PlayerControls';

import classNames from 'classnames';

export default function MediaPlayerControls(props) {
  const actions = props.playerActions;
  const playerState = props.playerState;

  return (
    <PlayerControls hasProgress={true}
                    controlBarText={props.controlBarText}

                    isLoading={playerState.isLoading}
                    isPlaying={playerState.shouldPlay}
                    currentTime={playerState.currentTime}
                    duration={playerState.duration}
                    isScrubbing={playerState.isScrubbing}

                    onPlayButtonClick={actions.shouldTogglePlaying}
                    onSeekStart={actions.didStartScrubbing}
                    onSeek={actions.shouldSeekTo}
                    onSeekStop={actions.didStopScrubbing}

                    onMouseEnter={actions.enterControls}
                    onMouseLeave={actions.leaveControls}

                    {...props}

                    className={className(playerState)}/>
  );
}

function className(playerState) {
  return classNames(playerStateClassNames(playerState),
                    {'has_been_faded': playerState.userHasBeenIdle});
}
