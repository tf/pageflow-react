import withPageStateProp from 'withPageStateProp';

import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'support/chai';

describe('withPageStateProp', () => {
  const Component = class extends React.Component {
    render() {
      return <span/>;
    }
  };
  const Container = withPageStateProp(Component);

  it('creates a wrapper component that passes props', () => {
    const result = shallow(<Container some="prop" />);

    expect(result.find(Component)).to.have.prop('some', 'prop');
  });

  it('sets pageState prop to from context', () => {
    const wrapper = mount(<Container />, {
      childContextTypes: {pageState: React.PropTypes.object},
      context: {pageState: {isPrepared: true}}
    });

    expect(wrapper.find(Component).prop('pageState')).to.deep.eq({isPrepared: true});
  });
});
