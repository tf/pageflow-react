import createPageStateReducer from '../createPageStateReducer';

import {expect} from 'support/chai';

describe('createPageStateReducer', () => {
  describe('returns a reducer that', () => {
    const pageTypeStateReducers = {
      video: function(state = {}, action) {
        switch (action) {
        case 'PLAY':
          return {...state, isPlaying: true};
        default:
          return state;
        }
      }
    };

    it('applies reducer for page type of page', () => {
      const page = {type: 'video'};
      const reducer = createPageStateReducer(pageTypeStateReducers);

      const reducedPage = reducer(page, 'PLAY');

      expect(reducedPage.state.isPlaying).to.eq(true);
    });

    it('does not alter other page properties', () => {
      const page = {type: 'video'};
      const reducer = createPageStateReducer(pageTypeStateReducers);

      const reducedPage = reducer(page, 'PLAY');

      expect(reducedPage.type).to.eq('video');
    });

    it('does not applies reducer for other page type', () => {
      const page = {type: 'audio'};
      const reducer = createPageStateReducer(pageTypeStateReducers);

      const reducedPage = reducer(page, 'PLAY');

      expect(reducedPage.state.isPlaying).to.eq(undefined);
    });

    it('returns same page if state did not change', () => {
      const page = {type: 'video'};
      const reducer = createPageStateReducer(pageTypeStateReducers);

      const initializedPage = reducer(page, 'INIT');
      const reducedPage = reducer(initializedPage, 'UNKNOWN');

      expect(reducedPage).to.eq(initializedPage);
    });
  });
});
