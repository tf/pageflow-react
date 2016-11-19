import React from 'react';

import createContainer from './createContainer.jsx';
import createResolverRoot from './createResolverRoot.jsx';
import resolve from './resolve';

/**
 * Prepare for usage with {pageflow.react.createPageType}.
 *
 * @param {Class<React.Component>} Component
 *   The component which renders the page contents.
 *
 * @return {Class<React.Component>}
 *
 * @alias pageflow.react.createPage
 * @since 0.1
 */
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
          isActive: this.props.isActive,
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
