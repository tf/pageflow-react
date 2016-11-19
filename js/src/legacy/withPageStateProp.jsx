import React from 'react';

/**
 * Creates a new component that provides a `pageState` prop to the
 * wrapped component, that provides information about the enclosing
 * page's state. The following properties are available:
 *
 * - `isPrepared`
 * - `isPreloaded`
 *
 * @example
 *
 * const {withPageStateProp} = pageflow.react;
 *
 * function SomeComponent(props) {
 *   if (props.pageState.isPrepared) {
 *     return (<p>some expensive content</p>);
 *   }
 * }
 *
 * pageflow.my.SomeComponent = withPageStateProp(MyComponent);
 *
 * @alias pageflow.react.withPageStateProp
 * @since edge
 */
export default function withPageStateProp(Component) {
  class Container extends React.Component {
    render() {
      return (
        <Component pageState={this.context.pageState} {...this.props} />
      );
    }
  }

  Container.contextTypes = {
    pageState: React.PropTypes.object
  };

  return Container;
}
