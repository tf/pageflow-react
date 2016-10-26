import MediaPage from 'media/Page';
import PageVideoPlayer from 'media/PageVideoPlayer';

import createPage from 'createPage';

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

export default createPage(VideoPage);
