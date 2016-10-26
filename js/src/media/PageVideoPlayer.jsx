import VideoPlayer from './VideoPlayer';

function PageVideoPlayer(props) {
  const page = props.page;
  const property = props.videoPropertyBaseName;

  if (props.pageState.isPrepared) {
    return (
      <VideoPlayer videoFileId={page[`${property}Id`]}
                   position={[page[`${property}X`], page[`${property}Y`]]} />
    );
  }
  else {
    return null;
  }
}

PageVideoPlayer.defaultProps = {
  videoPropertyBaseName: 'videoFile'
};

import withPageStateProp from 'withPageStateProp';

export default withPageStateProp(PageVideoPlayer);
