import VideoFilePlayer from './VideoFilePlayer';
import createPageFilePlayer from './createPageFilePlayer';
import {file} from 'files/selectors';
import {prop} from 'selectors';
import {combine} from 'utils';

import {connect} from 'react-redux';

const VideoPlayer = connect(combine({
  file: file('videoFiles', {id: prop('videoFileId')})
}))(createPageFilePlayer(VideoFilePlayer));

export default function PageVideoPlayer(props) {
  const page = props.page;
  const property = props.videoPropertyBaseName;

  return (
    <VideoPlayer videoFileId={page[`${property}Id`]}
                 playerState={props.playerState}
                 playerActions={props.playerActions}
                 fit="smart_contain"
                 position={[page[`${property}X`], page[`${property}Y`]]}
                 textTracksEnabled={props.textTracksEnabled}
                 loop={props.loop} />
  );
}

PageVideoPlayer.defaultProps = {
  videoPropertyBaseName: 'videoFile'
};
