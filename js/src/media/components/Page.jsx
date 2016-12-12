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
import NonJsLinks from './NonJsLinks';
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
    <PageWrapper className={pageWraperClassName(props.className, page, playerState)}>
      <PageBackground>
        {props.children}
        <PageShadow page={page} className={playerStateClassNames(playerState)} />
      </PageBackground>

      <PageForeground onInteraction={() => playerState.userIsIdle &&
                                         props.playerActions.userInteraction()}
                      classNames={playerStateClassNames(playerState)}>


        <MediaPlayerControls file={props.file}
                             playerState={playerState}
                             playerActions={props.playerActions}
                             qualities={props.qualities}
                             controlBarText={props.controlBarText}
                             infoBox={infoBox} />

        <PageScroller className={playerStateClassNames(playerState)}>
          <PageHeader page={page} />
          <PageText page={page}>
            <NonJsLinks file={props.file} />
          </PageText>
        </PageScroller>
      </PageForeground>
    </PageWrapper>
  );
}

function pageWraperClassName(className, page, playerState) {
  return classNames(className, {
    'is_idle': playerState.isPlaying && playerState.userIsIdle,
    'is_control_bar_hovered': playerState.userHoveringControls || playerState.focusInsideControls,
    'unplayed': !playerState.hasPlayed && !page.autoplay,
    'has_played': playerState.hasPlayed
  });
}
