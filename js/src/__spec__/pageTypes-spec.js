import {initFromSeed, reducers} from 'pageTypes';
import {pageType} from 'pageTypes/selectors';

import {createStore, combineReducers} from 'redux';

import {expect} from 'support/chai';

describe('pageType', () => {
  it('provides selector to get page type config of a page', () => {
    const store = createStore(combineReducers(reducers));
    const videoPageTypeConfig = {};

    initFromSeed({page_types: {video: videoPageTypeConfig}}, store.dispatch);

    const result = pageType({page: {type: 'video'}})(store.getState());

    expect(result).to.eq(videoPageTypeConfig);
  });

  it('allows to get page from selector props', () => {
    const store = createStore(combineReducers(reducers));
    const videoPageTypeConfig = {};
    const props = {
      targetPage: {type: 'video'}
    };

    initFromSeed({page_types: {video: videoPageTypeConfig}}, store.dispatch);

    const result = pageType({
      page: props => props.targetPage
    })(store.getState(), props);

    expect(result).to.eq(videoPageTypeConfig);
  });

  it('return null if page is null', () => {
    const store = createStore(combineReducers(reducers));
    const videoPageTypeConfig = {};

    initFromSeed({page_types: {video: videoPageTypeConfig}}, store.dispatch);

    const result = pageType({
      page: props => props.targetPage
    })(store.getState(), {});

    expect(result).to.eq(null);
  });
});
