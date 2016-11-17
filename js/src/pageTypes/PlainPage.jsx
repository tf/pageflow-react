import PageWrapper from 'components/PageWrapper';
import PageBackground from 'components/PageBackground';
import PageBackgroundImage from 'components/PageBackgroundImage';
import PageShadow from 'components/PageShadow';
import PageForeground from 'components/PageForeground';
import PageScroller from 'components/PageScroller';
import PageHeader from 'components/PageHeader';
import PageText from 'components/PageText';

import registerPageType from 'registerPageType';
import {connectInPage} from 'pages';
import {pageAttributes} from 'pages/selectors';
import combineSelectors from 'combineSelectors';

function PlainPage(props) {
  const page = props.page;

  return (
    <PageWrapper>
      <PageBackground>
        <PageBackgroundImage page={page} />
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

export function register() {
  registerPageType('plain', {
    component: connectInPage(
      combineSelectors({
        page: pageAttributes()
      })
    )(PlainPage)
  });
}
