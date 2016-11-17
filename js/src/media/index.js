import Page from './components/Page';
import PageVideoPlayer from './components/PageVideoPlayer';

import reducer from './reducer';
import sagas from './sagas';

export const reducers = {media: reducer};

export {
  Page,
  PageVideoPlayer,

  sagas,
};
