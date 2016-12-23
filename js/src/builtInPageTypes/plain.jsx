import {
  PageWrapper,
  PageForeground,
  PageScroller,
  PageHeader,
  PageText
} from 'components';

import {
  PageBackground,
  pageReducers as mediaPageReducers,
  pageSaga as mediaPageSaga
} from 'media';

import registerPageType from 'registerPageType';
import {connectInPage} from 'pages';
import {pageAttributes} from 'pages/selectors';
import {combine} from 'utils';

import {combineReducers} from 'redux';

function PlainPage(props) {
  const page = props.page;

  return (
    <PageWrapper>
      <PageBackground page={page} />

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
  registerPageType('background_image', {
    component: connectInPage(
      combine({
        page: pageAttributes()
      })
    )(PlainPage),

    reducer: combineReducers({
      ...mediaPageReducers
    }),

    saga: function*() {
      yield [
        mediaPageSaga({autoplay: true})
      ];
    }
  });
}
