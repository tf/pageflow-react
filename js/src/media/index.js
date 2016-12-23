import Page from './components/Page';
import PageVideoPlayer from './components/PageVideoPlayer';
import PageBackgroundVideo from './components/PageBackgroundVideo';
import PageBackgroundAsset from './components/PageBackgroundAsset';
import PageBackground from './components/PageBackground';

import reducer from './reducer';
import pageSaga from './sagas';

export const pageReducers = {media: reducer};

export {
  Page,
  PageVideoPlayer,
  PageBackgroundVideo,
  PageBackgroundAsset,
  PageBackground,

  pageSaga
};
