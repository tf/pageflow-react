import createContainer from 'create_container.jsx';
import Resolver from 'resolvers/Resolver';

import React from 'react';
import renderComponent from './support/render_component';

import TestUtils from 'react-addons-test-utils';

describe('createContainer', () => {
  it('creates a wrapper component that passes props', () => {
    var Component = class extends React.Component {};

    var Container = createContainer(Component);
    var result = renderComponent(Container, {some: 'prop'});

    expect(result.type).to.eq(Component);
    expect(result.props.some).to.eq('prop');
  });

  it('resolved fragments with given resolver', () => {
    var Component = class extends React.Component {};
    var FakeResolver = class extends Resolver {
      get(props) {
        return 'resolved page ' + props.targetPageId;
      }
    };

    var Container = createContainer(Component, {
      fragments: {
        pageLink: {
          targetPage: (callback) => {
            return new FakeResolver(callback)
          }
        }
      }
    });
    var result = renderComponent(Container, {
      pageLink: {
        targetPageId: 100
      }
    });

    expect(result.props.pageLink.targetPage).to.eq('resolved page 100');
  });

  it('rerenders component when resolver invokes callback', () => {
    var Component = class extends React.Component {};
    var FakeResolver = class extends Resolver {
      get(props) {
        return `resolved page ${this.data}`;
      }
    };
    var resolver;

    var Container = createContainer(Component, {
      fragments: {
        pageLink: {
          targetPage: (callback) => {
            resolver = new FakeResolver(callback);
            return resolver;
          }
        }
      }
    });

    const shallowRenderer = TestUtils.createRenderer();
    const component = React.createElement(Container, {
      pageLink: {
        targetPageId: 100
      }
    });

    shallowRenderer.render(component);

    resolver.data = 2;
    resolver._handleChange();

    var result = shallowRenderer.getRenderOutput();

    expect(result.props.pageLink.targetPage).to.eq('resolved page 2');
  });
});
