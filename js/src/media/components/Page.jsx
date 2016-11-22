import {
  PageWrapper,
  PageBackground,
  PageShadow,
  PageForeground,
  PageScroller,
  PageHeader,
  PageText
} from 'components';

import MediaPlayerControls from './PlayerControls';
import playerStateClassNames from './playerStateClassNames';

import classNames from 'classnames';

export default function MediaPage(props) {
  const page = props.page;
  const playerState = props.playerState;

  const infoBox = {
    title: page.additionalTitle,
    description: page.additionalDescription
  };

  return (
    <PageWrapper className={pageWraperClassName(page, playerState)}>
      <PageBackground>
        {props.children}
        <PageShadow page={page} className={playerStateClassNames(playerState)} />
      </PageBackground>

      <PageForeground trackUserInteraction={true}
                      classNames={playerStateClassNames(playerState)}>


        <MediaPlayerControls playerState={playerState}
                             playerActions={props.playerActions}
                             controlBarText={props.controlBarText}
                             infoBox={infoBox} />

        <PageScroller className={playerStateClassNames(playerState)}>
          <PageHeader page={page} />
          <PageText page={page} />
        </PageScroller>
      </PageForeground>
    </PageWrapper>
  );
}

function pageWraperClassName(page, playerState) {
  return classNames('videoPage', {
    'is_idle': playerState.isPlaying && playerState.userIsIdle,
    'is_control_bar_hovered': playerState.userHoveringControls,
    'unplayed': !playerState.hasPlayed && !page.autoplay,
    'has_played': playerState.hasPlayed
  });
}