import {reducers as currentReducers} from 'current';

import {currentParentPageAttributes,
        currentParentChapterAttributes} from 'current/selectors';

import {reducers as storylinesReducers,
        watchCollection as watchStorylinesCollection} from 'storylines';

import {reducers as chaptersReducers,
        watchCollection as watchChaptersCollection} from 'chapters';

import {createReducers as createPagesReducers,
        watchCollection as watchPagesCollection} from 'pages';

import {pageChange} from 'current/actions';

import createStore from 'createStore';

import {combineReducers} from 'redux';

import {expect} from 'support/chai';

describe('current', () => {
  function createStoreFromSeed(collections) {
    const reducer = combineReducers({
      ...currentReducers,
      ...storylinesReducers,
      ...chaptersReducers,
      ...createPagesReducers()
    });

    const store = createStore(reducer);

    watchStorylinesCollection(collections.storylines, store.dispatch);
    watchChaptersCollection(collections.chapters, store.dispatch);
    watchPagesCollection(collections.pages, store.dispatch);

    return store;
  }

  describe('currentParentPageAttributes', () => {
    it('returns attributes of current parent page', () => {
      const store = createStoreFromSeed({
        storylines: [
          {id: 100},
          {id: 200, configuration: {parent_page_perma_id: 1}}
        ],
        chapters: [
          {id: 10, storyline_id: 100},
          {id: 20, storyline_id: 200}
        ],
        pages: [
          {perma_id: 1, chapter_id: 10},
          {perma_id: 2, chapter_id: 20}
        ]
      });

      store.dispatch(pageChange({id: 2}));

      const result = currentParentPageAttributes()(store.getState());

      expect(result.permaId).to.eq(1);
    });

    it('returns null if current storyline does not have parent page', () => {
      const store = createStoreFromSeed({
        storylines: [
          {id: 100}
        ],
        chapters: [
          {id: 10, storyline_id: 100}
        ],
        pages: [
          {perma_id: 1, chapter_id: 10}
        ]
      });

      store.dispatch(pageChange({id: 1}));

      const result = currentParentPageAttributes()(store.getState());

      expect(result).to.eq(null);
    });
  });

  describe('currentParentChapterAttributes', () => {
    it('returns attributes of current parent chapter', () => {
      const store = createStoreFromSeed({
        storylines: [
          {id: 100},
          {id: 200, configuration: {parent_page_perma_id: 1}}
        ],
        chapters: [
          {id: 10, storyline_id: 100, title: 'Overview'},
          {id: 20, storyline_id: 200}
        ],
        pages: [
          {perma_id: 1, chapter_id: 10},
          {perma_id: 2, chapter_id: 20}
        ]
      });

      store.dispatch(pageChange({id: 2}));

      const result = currentParentChapterAttributes()(store.getState());

      expect(result.title).to.eq('Overview');
    });

    it('returns null if current storyline does not have parent page', () => {
      const store = createStoreFromSeed({
        storylines: [
          {id: 100}
        ],
        chapters: [
          {id: 10, storyline_id: 100}
        ],
        pages: [
          {perma_id: 1, chapter_id: 10}
        ]
      });

      store.dispatch(pageChange({id: 1}));

      const result = currentParentChapterAttributes()(store.getState());

      expect(result).to.eq(null);
    });
  });
});
