import {
  PageWrapper,
  PageForeground,
  PageScroller,
  PageHeader,
  PageText
} from 'components';

import {
  PageBackground,
  PagePrintImage,
  pageBackgroundReduxModule as mediaPageBackgroundReduxModule
} from 'media';

import registerPageType from 'registerPageType';
import {connectInPage} from 'pages';
import {pageAttributes} from 'pages/selectors';
import {combine} from 'utils';

function PlainPage(props) {
  const page = props.page;

  return (
    <PageWrapper>
      <PageBackground page={page} />

      <PageForeground>
        <PageScroller>
          <PageHeader page={page} />
          <PagePrintImage page={page} />

          <PageText page={page} />
        </PageScroller>
      </PageForeground>
    </PageWrapper>
  );
}

export function register() {
  registerPageType('background_image', {
    component: connectInPage(
      combine({
        page: pageAttributes()
      })
    )(PlainPage),

    reduxModules: [
      mediaPageBackgroundReduxModule
    ]
  });
}
