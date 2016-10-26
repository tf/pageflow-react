import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as mediaActions from './actions';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(mediaActions, dispatch);
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...ownProps,
    playerState: {
      ...stateProps,
      actions: dispatchProps
    }
  };
}

export default function(Component) {
  return connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component);
}
