import {file} from '../selectors';
import {createReducers, watchCollections} from 'files';

import {combineReducers} from 'redux';

import {expect} from 'support/chai';

describe('file', () => {
  function sample(files, fileUrlTemplates = {video_files: {}}) {
    const reducer = combineReducers(createReducers(files, fileUrlTemplates));
    let state;

    watchCollections(files, action => {
      state = reducer(state, action);
    });

    return state;
  }

  it('selects file id and variants', () => {
    const state = sample({'video_files': [{id: 5, variants: ['high']}]});

    const result = file('videoFiles', {id: 5})(state);

    expect(result).to.have.property('id', 5);
    expect(result).to.have.deep.property('variants[0]', 'high');
  });

  it('interpolates id partition into file url template', () => {
    const files = {'video_files': [{id: 2004, variants: ['high']}]};
    const fileUrlTemplates = {'video_files': {'high': 'http://example.com/:id_partition/high.mp4'}};
    const state = sample(files, fileUrlTemplates);

    const result = file('videoFiles', {id: 2004})(state);

    expect(result).to.have.deep.property('urls.high', 'http://example.com/000/002/004/high.mp4');
  });

  it('skips url with missing template', () => {
    const files = {'video_files': [{id: 2004, variants: ['unknown']}]};
    const fileUrlTemplates = {'video_files': {}};
    const state = sample(files, fileUrlTemplates);

    const result = file('videoFiles', {id: 2004})(state);

    expect(result).not.to.have.deep.property('urls.unknown');
  });
});
