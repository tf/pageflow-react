import Page from './components/Page';
import PageVideoPlayer from './components/PageVideoPlayer';
import PageBackgroundVideo from './components/PageBackgroundVideo';
import PageBackgroundAsset from './components/PageBackgroundAsset';
import PageBackground from './components/PageBackground';
import PagePrintImage from './components/PagePrintImage';

import reducer from './reducer';
import pageSaga from './sagas';

import fadeInWhenPageWillActivate from './sagas/fadeInWhenPageWillActivate';
import fadeOutWhenPageWillDeactivate from './sagas/fadeOutWhenPageWillDeactivate';

const reducers = {
  media: reducer
};

export function reduxModule(options) {
  return {
    reducers,

    saga: function*() {
      yield pageSaga(options);
    }
  };
}

export const pageBackgroundReduxModule = {
  reducers,

  saga: function*() {
    yield [
      fadeInWhenPageWillActivate(),
      fadeOutWhenPageWillDeactivate()
    ];
  }
};

export {
  Page,
  PageVideoPlayer,
  PagePrintImage,
  PageBackgroundVideo,
  PageBackgroundAsset,
  PageBackground
};
