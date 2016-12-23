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

export function textTracks({file,
                            defaultTextTrackFileId = () => {}}) {
  const settingsSelector = setting({property: 'textTrack'});
  const filesSelector = nestedFiles('textTrackFiles', {
    parent: file
  });

  return (state, props) => {
    const settings = settingsSelector(state, props) || {};
    const files = filesSelector(state, props);
    const translate = t(state, props);
    const defaultId = defaultTextTrackFileId(state, props);

    return {
      files: files.map(textTrackFile => ({
        displayLabel: displayLabel(textTrackFile, translate),
        isDefault: defaultId && textTrackFile.id == defaultId,
        ...textTrackFile
      })).sort((file1, file2) =>
        file1.displayLabel.localeCompare(file2.displayLabel)
      ),
      activeFileId: getActiveTextTrackFileId(files,
                                             defaultId,
                                             settings),
      mode: settings.kind == 'off' ? 'off' :
            settings.kind ? 'user' : 'auto'
    };
  };
}

function displayLabel(textTrackFile, t) {
  return textTrackFile.label ||
         t('pageflow.public.languages.' + textTrackFile.srclang || 'unknown',
           {defaultValue: t('pageflow.public.languages.unknown')});
}

function getActiveTextTrackFileId(textTrackFiles, defaultTextTrackFileId, options) {
  if (options.kind == 'off') {
    return null;
  }

  const file = textTrackFiles.find(textTrackFile => (
    textTrackFile.srclang == options.srclang &&
    textTrackFile.kind == options.kind
  ));

  if (file) {
    return file.id;
  }

  if (defaultTextTrackFileId) {
    const defaultTextTrackFile = textTrackFiles.find(textTrackFile =>
      textTrackFile.id == defaultTextTrackFileId
    );

    return defaultTextTrackFile && defaultTextTrackFile.id;
  }
}

export function videoQualitySetting() {
  return setting({property: 'videoQuality'});
}
