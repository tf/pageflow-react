import reducer from '../reducer';

import {timeUpdate, metaDataLoaded} from '../actions';

import {expect} from 'support/chai';

describe('reducer', () => {
  describe('for TIME_UPDATE action', () => {
    it('updates currentTime', () => {
      const nextState = reducer({currentTime: 30}, timeUpdate({currentTime: 40}));

      expect(nextState.currentTime).to.eq(40);
    });
  });

  describe('for META_DATA_LOADED action', () => {
    it('updates duration', () => {
      const nextState = reducer({}, metaDataLoaded({duration: 50}));

      expect(nextState.duration).to.eq(50);
    });
  });
});
