import {watchEvents} from '../hotkeys';
import {HOTKEY_TAB} from '../hotkeys/actions';
import {TAB} from 'utils/keyCodes';

import {expect} from 'support/chai';
import sinon from 'sinon';

describe('hotkeys.watchEvents', () => {
  it('dispatches action for current page when tab key is pressed', () => {
    const window = {
      addEventListener(name, handler) {
        this.handler = handler;
      },

      trigger(event) {
        this.handler(event);
      }
    };
    const store = {
      getState() {
        return {currentPageId: 5};
      },

      dispatch: sinon.spy()
    };

    watchEvents(window, store);
    window.trigger({keyCode: TAB});

    expect(store.dispatch).to.have.been.calledWith(sinon.match({
      type: HOTKEY_TAB,
      meta: {
        itemId: 5
      }
    }));
  });
});
