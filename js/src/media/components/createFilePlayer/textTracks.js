export function updateTextTrackModes(player, prevActiveTextTrackFileId, activeTextTrackFileId) {
  if (prevActiveTextTrackFileId === activeTextTrackFileId) {
    return;
  }

  [].slice.call(player.textTracks()).forEach(textTrack => {
    if (textTrack.id == `text_track_file_${activeTextTrackFileId}`) {
      textTrack.mode = 'showing';
    }
    else {
      textTrack.mode = 'disabled';
    }
  });
}

export function watchForTextTrackModeChanges(player, updateTextTrackSettings) {
  player.on('pause', () => {
    const showingTextTrack = [].slice.call(player.textTracks()).find(textTrack =>
      textTrack.mode == 'showing'
    );

    updateTextTrackSettings(showingTextTrack ? {
      srclang: showingTextTrack.language,
      kind: showingTextTrack.kind
    } : null);
  });
}

export function updateTextTrackPosition(player, position) {
  if (position == 'top') {
    updateCueLineSettings(player, 1);
  }
  else  {
    updateCueLineSettings(player, 'auto');
  }
}

function updateCueLineSettings(player, line) {
  [].slice.call(player.textTracks()).forEach(textTrack => {
    if (textTrack.mode == 'showing' && textTrack.cues) {
      for (let i = 0; i < textTrack.cues.length; i++) {
        textTrack.cues[i].line = line;
      }
    }
  });
}

export function textTracksFromFiles(textTrackFiles, textTracksEnabled) {
  if (!textTracksEnabled) {
    return [];
  }

  return textTrackFiles
    .filter(textTrackFile => textTrackFile.isReady)
    .map(textTrackFile => ({
      id: `text_track_file_${textTrackFile.id}`,
      kind: textTrackFile.kind,
      label: textTrackFile.displayLabel,
      srclang: textTrackFile.srclang,
      src: textTrackFile.urls.vtt
    }));
}
