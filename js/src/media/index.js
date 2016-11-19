import Page from './components/Page';
import PageVideoPlayer from './components/PageVideoPlayer';

import reducer from './reducer';
import pageSaga from './sagas';

export const pageReducers = {media: reducer};

export {
  Page,
  PageVideoPlayer,

  pageSaga
};
