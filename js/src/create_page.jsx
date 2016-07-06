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
        pageIsPreloaded: this.props.isPreloaded
      };
    }

    render() {
      return (
        <ContainerComponent pageId={this.props.pageId} />
      );
    }
  };

  Page.childContextTypes = {
    pageHooks: React.PropTypes.object,
    pageIsPreloaded: React.PropTypes.bool
  };

  return createResolverRoot(Page);
};
