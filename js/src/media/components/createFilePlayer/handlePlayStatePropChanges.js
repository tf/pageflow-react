export default function handlePlayStatePropChanges(player, playerState, nextPlayerState, playerActions, playsInline) {
  if (!playerState.shouldPrebuffer && nextPlayerState.shouldPrebuffer) {
    player.prebuffer().then(playerActions.prebuffered);
  }

  if (!playerState.shouldPlay && nextPlayerState.shouldPlay) {
    if (!playsInline) {
      player.requestNativePlayerOnPhone();
    }

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

  if (nextPlayerState.shouldSeekTo !== undefined && nextPlayerState.shouldSeekTo !== playerState.shouldSeekTo) {
    player.currentTime(nextPlayerState.shouldSeekTo);
  }
}
