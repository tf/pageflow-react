import {ensureItemActionId} from './itemActionHelpers';
import {addItemScope, getItemScopeProperty} from './itemScopeHelpers';

import {connect} from 'react-redux';
import React from 'react';

export default function(collectionName) {
  const itemScopeProperty = getItemScopeProperty(collectionName);

  return function connectInItemScope(mapStateToProps, mapDispatchToProps, mergeProps) {
    const connecter = connect(
      mapStateToProps ? (state, props) =>
        mapStateToProps(
          addItemScope(state, collectionName, props[itemScopeProperty]), props
        ) : null,
      mapDispatchToProps ? (dispatch, props) =>
        mapDispatchToProps(action => {
          ensureItemActionId(action, collectionName, props[itemScopeProperty]);
          return dispatch(action);
        }) : null,
      mergeProps
    );

    return function(Component) {
      const Connected = connecter(Component);

      class ConnectedInItemScope extends React.Component {
        render() {
          const props = {
            ...this.props,
            [itemScopeProperty]: this.context[itemScopeProperty]
          };

          return (<Connected {...props} />);
        }
      }

      ConnectedInItemScope.contextTypes = {
        [itemScopeProperty]: React.PropTypes.number
      };

      return ConnectedInItemScope;
    };
  };
}
