import React from 'react';

import createContainer from './create_container.jsx';
import createResolverRoot from './create_resolver_root.jsx';
import resolve from './resolve';

export default function(Component, options = {}) {
  const ContainerComponent = createContainer(Component, {
    fragments: {
      page: resolve('page', {
        property: 'pageId'
      }),
      ...(options.fragments || {})
    },
  });

  class Page extends React.Component {
    getChildContext() {
      return {
        pageHooks: this.props.pageHooks,
        scrollIndicator: this.props.scrollIndicator,
        pageState: {
          isPreloaded: this.props.isPreloaded,
          isPrepared: this.props.isPrepared
        }
      };
    }

    render() {
      return (
        <ContainerComponent pageId={this.props.pageId} />
      );
    }
  }

  Page.childContextTypes = {
    pageHooks: React.PropTypes.object,
    scrollIndicator: React.PropTypes.object,
    pageState: React.PropTypes.object,
  };

  return createResolverRoot(Page);
}
