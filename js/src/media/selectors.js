import * as actions from './actions';
import {nestedFiles} from 'files/selectors';
import {pageState} from 'pages/selectors';
import {setting} from 'settings/selectors';

import {bindActionCreators} from 'redux';

export const playerState = pageState('media');

export function playerActions(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export function textTracks({file}) {
  const settingsSelector = setting({property: 'textTrack'});
  const filesSelector = nestedFiles('textTrackFiles', {
    parent: file
  });

  return (state, props) => {
    const settings = settingsSelector(state, props);
    const files = filesSelector(state, props);

    return {
      files,
      activeFileId: getActiveTextTrackFileId(files, settings)
    };
  };
}

function getActiveTextTrackFileId(textTrackFiles, options) {
  options = options || {};

  const file = textTrackFiles.find(textTrackFile => (
    textTrackFile.srclang == options.srclang &&
    textTrackFile.kind == options.kind
  ));

  return file && file.id;
}

export function videoQualitySetting() {
  return setting({property: 'videoQuality'});
}
