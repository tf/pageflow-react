export function updateTextTrackModes(player, activeTextTrackFileId) {
  [].slice.call(player.textTracks()).forEach(textTrack => {
    if (textTrack.id == `text_track_file_${activeTextTrackFileId}`) {
      textTrack.mode = 'showing';
    }
    else {
      textTrack.mode = 'disabled';
    }
  });
}

export function textTracksFromFiles(textTrackFiles, textTracksEnabled) {
  if (!textTracksEnabled) {
    return [];
  }

  return textTrackFiles.map(textTrackFile => ({
    id: `text_track_file_${textTrackFile.id}`,
    kind: textTrackFile.kind,
    label: textTrackFile.label,
    srclang: textTrackFile.srclang,
    src: textTrackFile.urls.original
  }));
}
