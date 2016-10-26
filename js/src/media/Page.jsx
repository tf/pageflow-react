import MediaPageWrapper from './PageWrapper';
import PageBackground from 'components/PageBackground';
import MediaPageShadow from './PageShadow';
import MediaPageForeground from './PageForeground';
import MediaPageScroller from './PageScroller';
import PageHeader from 'components/PageHeader';
import PageText from 'components/PageText';

import MediaPlayerStateProvider from './PlayerStateProvider';
import MediaPlayerControls from './PlayerControls';

export default class extends React.Component {
  render() {
    const page = this.props.page;

    return (
      <MediaPlayerStateProvider page={page}>
        <MediaPageWrapper className="videoPage">
          <PageBackground>
            {this.props.children}
            <MediaPageShadow page={page} />
          </PageBackground>

          <MediaPageForeground>
            <MediaPlayerControls infoBox={{title: page.additionalTitle,
                                           description: page.additionalDescription}} />
            <MediaPageScroller>
              <PageHeader page={page} />
              <PageText page={page} />
            </MediaPageScroller>
          </MediaPageForeground>
        </MediaPageWrapper>
      </MediaPlayerStateProvider>
    );
  }
}
