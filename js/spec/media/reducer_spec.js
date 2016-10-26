import reducer from 'media/reducer';

import {didTimeUpdate, didLoadMetaData} from 'media/actions';

import {expect} from 'support/chai';

describe('media reducer', () => {
  describe('for DID_TIME_UPDATE action', () => {
    it('updates currentTime', () => {
      const nextState = reducer({currentTime: 30}, didTimeUpdate({currentTime: 40}));

      expect(nextState.currentTime).to.eq(40);
    });
  });

  describe('for DID_LOAD_META_DATA action', () => {
    it('updates duration', () => {
      const nextState = reducer({}, didLoadMetaData({duration: 50}));

      expect(nextState.duration).to.eq(50);
    });
  });
});
