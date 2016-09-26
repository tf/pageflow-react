import withPageLifecycle from 'withPageLifecycle';

import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'support/chai';
import sinon from 'sinon';
import Backbone from 'backbone';

describe('withPageLifecycle', () => {
  it('creates a wrapper component that passes props', () => {
    const Component = class extends React.Component {};

    const Container = withPageLifecycle(Component);
    const result = shallow(<Container some="prop" />);

    expect(result.find(Component)).to.have.prop('some', 'prop');
  });

  Object.keys(withPageLifecycle.hookMapping).forEach(hook => {
    const method = withPageLifecycle.hookMapping[hook];

    it(`calls ${method} when ${hook} page hook is triggered`, () => {
      const lifecycleMethod = sinon.spy();
      const Component = class extends React.Component {
        constructor(props, context) {
          super(props, context);
          this[method] = lifecycleMethod;
        }

        render() {
          return <span/>;
        }
      };
      const pageHooks = {...Backbone.Events};
      const Container = withPageLifecycle(Component);

      mount(<Container />, {
        childContextTypes: {pageHooks: React.PropTypes.object},
        context: {pageHooks}
      });

      pageHooks.trigger(hook);

      expect(lifecycleMethod).to.have.been.called;
    });
  });
});
