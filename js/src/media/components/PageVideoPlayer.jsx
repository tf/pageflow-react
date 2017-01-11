import VideoFilePlayer from './VideoFilePlayer';
import createPageFilePlayer from './createPageFilePlayer';
import {file} from 'files/selectors';
import {prop} from 'selectors';
import {combine} from 'utils';

import {connect} from 'react-redux';

const VideoPlayer = connect(combine({
  file: file('videoFiles', {id: prop('videoFileId')}),
  posterImageFile: file('imageFiles', {id: prop('posterImageFileId')})
}))(createPageFilePlayer(VideoFilePlayer));

export default function PageVideoPlayer(props) {
  const page = props.page;
  const property = props.videoPropertyBaseName;

  return (
    <VideoPlayer videoFileId={page[`${property}Id`]}
                 posterImageFileId={page[`${props.posterImagePropertyBaseName}Id`]}
                 playerState={props.playerState}
                 playerActions={props.playerActions}
                 fit={props.fit}
                 position={[page[`${property}X`], page[`${property}Y`]]}
                 textTracksEnabled={props.textTracksEnabled}
                 loop={props.loop}
                 muted={props.muted}
                 playsInline={props.playsInline} />
  );
}

PageVideoPlayer.defaultProps = {
  videoPropertyBaseName: 'videoFile',
  posterImagePropertyBaseName: 'posterImageId',
  fit: 'smart_contain'
};
