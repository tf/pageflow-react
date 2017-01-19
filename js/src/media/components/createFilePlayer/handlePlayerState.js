export function initPlayer(player, getPlayerState, prevFileId, fileId) {
  const playerState = getPlayerState();

  if (fileId === prevFileId) {
    if (playerState.currentTime > 0) {
      player.currentTime(playerState.currentTime);
    }
  }

  if (playerState.isPlaying) {
    player.play();
  }

  player.on('canplay', function () {
    if (getPlayerState().shouldPlay && player.paused()) {
      player.play();
    }
  });
}

export function updatePlayer(player, playerState, nextPlayerState, playerActions, playsInline) {
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

  if (nextPlayerState.shouldSeekTo !== undefined && nextPlayerState.shouldSeekTo !== playerState.shouldSeekTo) {
    player.currentTime(nextPlayerState.shouldSeekTo);
  }
}
