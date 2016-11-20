import {reducers, watchCollection} from 'storylines';
import {storylineAttribute} from 'storylines/selectors';

import {createStore, combineReducers} from 'redux';
import {expect} from 'support/chai';

describe('storylines', () => {
  it('exports reducers, selecors and watcher for storylines collection', () => {
    const store = createStore(combineReducers(reducers));
    const storylines = [
      {
        id: 100,
        configuration: {
          parent_page_id: 1
        }
      }
    ];

    watchCollection(storylines, store.dispatch);

    expect(storylineAttribute('parentPageId', {id: 100})(store.getState())).to.eq(1);
  });
});
