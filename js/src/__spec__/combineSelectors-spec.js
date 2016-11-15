import combineSelectors from '../combineSelectors';

import {expect} from 'support/chai';

describe('combineSelectors', () => {
  describe('returns function that', () => {
    it('', () => {
      const selector1 = function(state, props) {
        return state.value;
      };
      const selector2 = function(state, props) {
        return props.value;
      };
      const combinedSelector = combineSelectors({
        selector1,
        selector2
      });
      const state = {
        value: 'from state'
      };
      const props = {
        value: 'from props'
      };

      const result = combinedSelector(state, props);

      expect(result).to.eql({
        selector1: 'from state',
        selector2: 'from props'
      });
    });
  });
});
