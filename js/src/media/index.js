import Page from './components/Page';
import PageVideoPlayer from './components/PageVideoPlayer';
import PageBackgroundVideo from './components/PageBackgroundVideo';

import reducer from './reducer';
import pageSaga from './sagas';

export const pageReducers = {media: reducer};

export {
  Page,
  PageVideoPlayer,
  PageBackgroundVideo,

  pageSaga
};
