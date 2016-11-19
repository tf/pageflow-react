import {createItemScopeProvider} from 'collections';
import {registry as pageTypeRegistry} from 'registerPageType';
import boot from 'boot';

import React from 'react';
import {Provider} from 'react-redux';

const PageProvider = createItemScopeProvider('pages');

export default class extends React.Component {
  componentWillMount() {
    this.store = boot(this.props.resolverSeed);
    this.pageComponent = findPageComponent(this.props.pageType);
  }

  render(props) {
    const PageComponent = this.pageComponent;

    return (
      <Provider store={this.store}>
        <PageProvider itemId={this.props.pageId}>
          <PageComponent />
        </PageProvider>
      </Provider>
    );
  }
}

function findPageComponent(pageTypeName) {
  return pageTypeRegistry.find(({name, component}) =>
    name == pageTypeName
  ).component;
}
