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
    static childContextTypes = {
      pageHooks: React.PropTypes.object,
      scrollIndicator: React.PropTypes.object,
      pageIsPreloaded: React.PropTypes.bool
    }

    getChildContext() {
      return {
        pageHooks: this.props.pageHooks,
        scrollIndicator: this.props.scrollIndicator,
        pageIsPreloaded: this.props.isPreloaded
      };
    }

    render() {
      return (
        <ContainerComponent pageId={this.props.pageId} />
      );
    }
  };

  return createResolverRoot(Page);
};
