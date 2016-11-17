import classNames from 'classnames';

export default function(playerState) {
  return classNames({
    'is_playing': playerState.isPlaying,
    'is_playing_delayed': playerState.hasBeenPlayingJustNow,
    'is_paused': !playerState.isPlaying,
  });
}

