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
    'video_files': [
      {id: 2004, variants: []},
      {id: 2005, variants: []}
    ],
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
          label: 'German'
        }
      },
      {
        id: 4001,
        parent_file_id: 2005,
        parent_file_model_type: 'Pageflow::VideoFile',
        configuration: {
          kind: 'captions',
          srclang: 'de'
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

  it('sets activeFileId to id of text track matching settings', () => {
    const state = sample({
      files,
      textTrack: file('textTrackFiles', {id: 3002})
    });

    const result = textTracks({
      file: file('videoFiles', {id: 2004})
    })(state);

    expect(result).to.have.deep.property('activeFileId', 3002);
  });

  it('sets activeFileId to id of given by defaultTextTrackFileId selector if non matches setting', () => {
    const state = sample({
      files,
      textTrack: file('textTrackFiles', {id: 3001}),
    });

    const result = textTracks({
      file: file('videoFiles', {id: 2005}),
      defaultTextTrackFileId: () => 4001
    })(state);

    expect(result).to.have.deep.property('activeFileId', 4001);
  });

  it('sets activeFileId to falsy if defaultTextTrackFileId selector gives unknown id', () => {
    const state = sample({
      files,
      textTrack: file('textTrackFiles', {id: 3001}),
    });

    const result = textTracks({
      file: file('videoFiles', {id: 2005}),
      defaultTextTrackFileId: () => 8000
    })(state);

    expect(result.activeFileId).to.be.falsy;
  });

  it('sets activeFileId to null if kind is "off"', () => {
    const state = sample({
      files,
      textTrack: () => ({kind: 'off'}),
    });

    const result = textTracks({
      file: file('videoFiles', {id: 2005}),
      defaultTextTrackFileId: () => 4001
    })(state);

    expect(result.activeFileId).to.be.falsy;
  });

  it('adds displayLabel', () => {
    const state = sample({files});

    const result = textTracks({
      file: file('videoFiles', {id: 2004})
    })(state);

    expect(result).to.have.deep.property('files[1].displayLabel', 'German');
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
