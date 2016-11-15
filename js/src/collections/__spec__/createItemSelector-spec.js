import createItemSelector from '../createItemSelector';

import {expect} from 'support/chai';

describe('createItemSelector', () => {
  describe('creates selector that', () => {
    it('can look up item by id', () => {
      const state = {
        posts: {
          4: {id: 4, title: 'Minor news'},
          5: {id: 5, title: 'Big news'}
        }
      };
      const selector = createItemSelector('posts');

      const result = selector({id: 5})(state);

      expect(result.title).to.eq('Big news');
    });

    it('id can be a function taking props', () => {
      const state = {
        posts: {
          4: {id: 4, title: 'Minor news'},
          5: {id: 5, title: 'Big news'}
        }
      };
      const selector = createItemSelector('posts');
      const props = {id: 5};

      const result = selector({id: p => p.id})(state, props);

      expect(result.title).to.eq('Big news');
    });

    it('return undefined if no item with id exists', () => {
      const state = {
        posts: {}
      };
      const selector = createItemSelector('posts');

      const result = selector({id: 5})(state);

      expect(result).to.eq(undefined);
    });

    it('uses connected id from state if id is missing', () => {
      const state = {
        __posts_connectedId: 5,
        posts: {
          4: {id: 4, title: 'Minor news'},
          5: {id: 5, title: 'Big news'}
        }
      };
      const selector = createItemSelector('posts');

      const result = selector()(state);

      expect(result.title).to.eq('Big news');
    });
  });
});
