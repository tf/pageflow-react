import MediaPageWrapper from './PageWrapper';
import PageBackground from 'components/PageBackground';
import MediaPageShadow from './PageShadow';
import MediaPageForeground from './PageForeground';
import MediaPageScroller from './PageScroller';
import PageHeader from 'components/PageHeader';
import PageText from '../components/PageText';
import MediaPlayerControls from './PlayerControls';

export default function(props) {
  const page = props.page;

  return (
    <MediaPageWrapper className="videoPage">
      <PageBackground>
        {props.children}
        <MediaPageShadow page={page} />
      </PageBackground>

      <MediaPageForeground>
        <MediaPlayerControls playerState={props.playerState}
                             infoBox={{title: page.additionalTitle,
                                       description: page.additionalDescription}} />
        <MediaPageScroller>
          <PageHeader page={page} />
          <PageText page={page} />
        </MediaPageScroller>
      </MediaPageForeground>
    </MediaPageWrapper>
  );
}
