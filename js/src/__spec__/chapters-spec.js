import {reducers, watchCollection} from 'chapters';
import {chapterAttribute} from 'chapters/selectors';

import {createStore, combineReducers} from 'redux';
import {expect} from 'support/chai';

describe('chapters', () => {
  it('exports reducers, selecors and watcher for chapters collection', () => {
    const store = createStore(combineReducers(reducers));
    const chapters = [
      {
        id: 100,
        title: 'Chapter 5',
        position: 4
      }
    ];

    watchCollection(chapters, store.dispatch);

    expect(chapterAttribute('title', {id: 100})(store.getState())).to.eq('Chapter 5');
    expect(chapterAttribute('position', {id: 100})(store.getState())).to.eq(4);
  });
});
