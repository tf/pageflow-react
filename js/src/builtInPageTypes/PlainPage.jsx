import {
  PageWrapper,
  PageBackground,
  PageBackgroundImage,
  PageShadow,
  PageForeground,
  PageScroller,
  PageHeader,
  PageText
} from 'components';

import registerPageType from 'registerPageType';
import {connectInPage} from 'pages';
import {pageAttributes} from 'pages/selectors';
import {combine} from 'utils';

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
      combine({
        page: pageAttributes()
      })
    )(PlainPage)
  });
}
