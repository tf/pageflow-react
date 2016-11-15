import PageWrapper from 'components/PageWrapper';
import PageBackground from 'components/PageBackground';
import PageBackgroundVideo from 'media/PageBackgroundVideo';
import PageShadow from 'components/PageShadow';
import PageForeground from 'components/PageForeground';
import PageScroller from 'components/PageScroller';
import PageHeader from 'components/PageHeader';
import PageText from 'components/PageText';

import createPage from 'createPage';

function PlainPage(props) {
  const page = props.page;

  return (
    <PageWrapper>
      <PageBackground>
        <PageBackgroundVideo page={page} />
        <PageShadow page={page} />
      </PageBackground>

      <PageForeground>
        <PageScroller>
          <PageHeader page={page} />
          <PageText page={page} />
        </PageScroller>
      </PageForeground>
    </PageWrapper>
  );
}

export default createPage(PlainPage);
