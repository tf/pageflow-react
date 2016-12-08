export default function handlePlayStatePropChanges(player, playerState, nextPlayerState, playerActions) {
  if (!playerState.shouldPrebuffer && nextPlayerState.shouldPrebuffer) {
    player.prebuffer().then(playerActions.prebuffered);
  }

  if (!playerState.shouldPlay && nextPlayerState.shouldPlay) {
    if (nextPlayerState.fadeDuration) {
      player.playAndFadeIn(nextPlayerState.fadeDuration);
    }
    else {
      player.play();
    }
  }
  else if (playerState.shouldPlay && !nextPlayerState.shouldPlay) {
    if (nextPlayerState.fadeDuration) {
      player.fadeOutAndPause(nextPlayerState.fadeDuration);
    }
    else {
      player.pause();
    }
  }

  if (nextPlayerState.shouldSeekTo && nextPlayerState.shouldSeekTo !== playerState.shouldSeekTo) {
    player.currentTime(nextPlayerState.shouldSeekTo);
  }
}
