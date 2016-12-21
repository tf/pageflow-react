import {textTracks} from '../selectors';
import {updateTextTrackSettings} from '../actions';

import {file} from 'files/selectors';

import {
  createReducers as createFilesReducers,
  watchCollections as watchFilesCollections
} from 'files';

import {reducers as settingsReducers} from 'settings';

import {reducers as i18nReducers,
        initFromSeed as initI18nFromSeed} from 'i18n';

import {combineReducers} from 'redux';

import {expect} from 'support/chai';

describe('textTracks selector', () => {
  beforeEach(() => {
    window.I18n = {
      t() {
        return '(translation)';
      }
    };
  });

  const files = {
    'video_files': [{id: 2004, variants: []}],
    'text_track_files': [
      {
        id: 3001,
        parent_file_id: 2004,
        parent_file_model_type: 'Pageflow::VideoFile',
        configuration: {
          kind: 'captions',
          srclang: 'en'
        }
      },
      {
        id: 3002,
        parent_file_id: 2004,
        parent_file_model_type: 'Pageflow::VideoFile',
        configuration: {
          kind: 'captions',
          srclang: 'de',
          label: 'English'
        }
      }
    ]
  };

  it('selects text tracks of given file', () => {
    const state = sample({files});

    const result = textTracks({
      file: file('videoFiles', {id: 2004})
    })(state);

    expect(result).to.have.deep.property('files[0].id', 3001);
  });

  it('sets active flag on text track matching settings', () => {
    const state = sample({
      files,
      textTrack: file('textTrackFiles', {id: 3002})
    });

    const result = textTracks({
      file: file('videoFiles', {id: 2004})
    })(state);

    expect(result).to.have.deep.property('activeFileId', 3002);
  });

  it('adds displayLabel', () => {
    const state = sample({files});

    const result = textTracks({
      file: file('videoFiles', {id: 2004})
    })(state);

    expect(result).to.have.deep.property('files[1].displayLabel', 'English');
  });
});

function sample({
  files,
  fileUrlTemplates = {
    video_files: {},
    text_track_files: {},
  },
  modelTypes = {
    video_files: 'Pageflow::VideoFile',
    text_track_files: 'Pageflow::TextTrackFile'
  },
  textTrack
}) {
  let state;
  const reducer = combineReducers({
    ...i18nReducers,
    ...createFilesReducers(files, {fileUrlTemplates, modelTypes}),
    ...settingsReducers
  });

  initI18nFromSeed({locale: 'en'}, action => {
    state = reducer(state, action);
  });

  watchFilesCollections(files, action => {
    state = reducer(state, action);
  });

  if (textTrack) {
    const updateSettingsAction = updateTextTrackSettings(textTrack(state));

    state.settings = {
      [updateSettingsAction.payload.property]: updateSettingsAction.payload.value
    };
  }

  return state;
}
