import * as actions from './actions';
import {nestedFiles} from 'files/selectors';
import {pageState} from 'pages/selectors';
import {setting} from 'settings/selectors';
import {t} from 'i18n/selectors';

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
    const translate = t(state, props);

    return {
      files: files.map(textTrackFile => ({
        displayLabel: displayLabel(textTrackFile, translate),
        ...textTrackFile
      })).sort((file1, file2) =>
        file1.displayLabel.localeCompare(file2.displayLabel)
      ),
      activeFileId: getActiveTextTrackFileId(files, settings)
    };
  };
}

function displayLabel(textTrackFile, t) {
  return textTrackFile.label ||
         t('pageflow.languages.' + textTrackFile.srclang || 'unknown',
           {defaultValue: t('pageflow.languages.unknown')});
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
