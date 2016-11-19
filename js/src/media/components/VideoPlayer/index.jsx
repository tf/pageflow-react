import VideoFilePlayer from './VideoFilePlayer';
import Positioner from './Positioner';

import {file} from 'files/selectors';

import {combine} from 'utils';
import {connect} from 'react-redux';

function VideoPlayer(props) {
  if (props.videoFile) {
    return (
      <Positioner videoFile={props.videoFile}
                  position={props.position}>

        <VideoFilePlayer videoFile={props.videoFile}
                         playerState={props.playerState}
                         playerActions={props.playerActions} />
      </Positioner>
    );
  }
  else {
    return null;
  }
}

export default connect(
  combine({
    videoFile: file('videoFiles', {id: props => props.videoFileId})
  })
)(VideoPlayer);
