import {Page as MediaPage, pageSagas as mediaPageSagas} from 'media';
import PageVideoPlayer from 'media/PageVideoPlayer';

class VideoPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onVideoEnd = () => {
      if (this.props.page.goToNextPage) {
        pageflow.slides.next();
      }
    };
  }

  render() {
    const page = this.props.page;

    return (
      <MediaPage page={page}>
        <PageVideoPlayer page={page} />
      </MediaPage>
    );
  }
}

import createReduxPageType from 'createReduxPageType';

import mediaReducers from 'media/reducers';

export default createReduxPageType(VideoPage, {
  reducers: {
    ...mediaReducers
  },
  sagas: [
    ...mediaPageSagas
  ]
});
