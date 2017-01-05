import {reducers, watch} from 'hideText';

import {textIsHidden,
        textHasBeenHidden} from 'hideText/selectors';

import {pageChange} from 'current/actions';

import Backbone from 'backbone';
import createStore from 'createStore';
import {combineReducers} from 'redux';

import {expect} from 'support/chai';

describe('current', () => {
  function setup() {
    const hideText = {
      activate() {
        this.trigger('activate');
      },

      deactivate() {
        this.trigger('deactivate');
      },

      ...Backbone.Events
    };
    const store = createStore(combineReducers(reducers));

    watch(hideText, store.dispatch);

    return {
      hideText,

      dispatch: store.dispatch.bind(store),

      select: function(selector) {
        return selector(store.getState());
      }
    };
  }

  describe('textIsHidden', () => {
    it('returns false initially', () => {
      const {select} = setup();

      const result = select(textIsHidden);

      expect(result).to.eq(false);
    });

    it('returns true after activate action', () => {
      const {hideText, select} = setup();

      hideText.activate();
      const result = select(textIsHidden);

      expect(result).to.eq(true);
    });

    it('returns false after deactivate action', () => {
      const {hideText, select} = setup();

      hideText.activate();
      hideText.deactivate();
      const result = select(textIsHidden);

      expect(result).to.eq(false);
    });
  });

  describe('textHasBeenHidden', () => {
    it('returns false initially', () => {
      const {select} = setup();

      const result = select(textHasBeenHidden);

      expect(result).to.eq(false);
    });

    it('returns true after activate action', () => {
      const {hideText, select} = setup();

      hideText.activate();
      const result = select(textHasBeenHidden);

      expect(result).to.eq(true);
    });

    it('returns true after deactivate action', () => {
      const {hideText, select} = setup();

      hideText.activate();
      hideText.deactivate();
      const result = select(textHasBeenHidden);

      expect(result).to.eq(true);
    });

    it('returns false after page change action', () => {
      const {hideText, dispatch, select} = setup();

      hideText.activate();
      dispatch(pageChange({id: 3}));
      const result = select(textHasBeenHidden);

      expect(result).to.eq(false);
    });
  });
});
