import PageWrapper from 'components/PageWrapper';

import classNames from 'classnames';

function PageWrapperWithPlayerStateClassNames(props) {
  return (
    <PageWrapper className={className(props)}>
      {props.children}
    </PageWrapper>
  );
}

function className(props) {
  const {className, playerState} = props;

  return classNames(className, {
    'is_idle': playerState.isPlaying && playerState.userIsIdle,
    'is_control_bar_hovered': playerState.userHoveringControls,
    'unplayed': !playerState.hasPlayed && !props.neverUnplayed,
    'has_played': playerState.hasPlayed
  });
}

import {connect} from 'react-redux';
import {pageConfiguration, playerState} from 'media/selectors';

export default connect(state => {
  return {
    playerState: playerState(state),
    neverUnplayed: pageConfiguration('autoplay')(state)
  };
})(PageWrapperWithPlayerStateClassNames);
