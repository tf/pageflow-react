import createPageType from 'createPageType';

import PlainPage from 'pages/PlainPage';
import VideoPage from 'pages/VideoPage';

export default function() {
  pageflow.pageType.register('plain', createPageType(PlainPage));
  pageflow.pageType.register('new_video', createPageType(VideoPage));
}
