export default function(player, actions) {
  player.on('loadedmetadata', () => actions.metaDataLoaded({
    duration: player.duration()
  }));

  player.on('play', actions.playing);
  player.on('pause', actions.paused);
  player.on('waiting', actions.waiting);
  player.on('seeking', actions.seeking);
  player.on('seeked', actions.seeked);
  player.on('bufferunderrun', actions.bufferUnderrun);

  player.on('timeupdate', () => actions.timeUpdate({
    currentTime: player.currentTime()
  }));

  player.on('ended', actions.ended);
}
