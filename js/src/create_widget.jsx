import React from 'react';

import createContainer from './create_container.jsx';
import createResolverRoot from './create_resolver_root.jsx';
import resolve from './resolve';

export default function(Component) {
  const ContainerComponent = createContainer(Component, {
    fragments: {
      widget: resolve('widget', {
        property: 'widgetRole'
      }),
    },
  });

  return createResolverRoot(ContainerComponent);
};
