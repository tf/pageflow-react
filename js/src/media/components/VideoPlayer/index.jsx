import VideoFilePlayer from './VideoFilePlayer';
import Positioner from './Positioner';

import {file, nestedFiles} from 'files/selectors';

import {combine} from 'utils';
import {connect} from 'react-redux';

function VideoPlayer(props) {
  if (props.videoFile) {
    return (
      <Positioner videoFile={props.videoFile}
                  position={props.position}>

        <VideoFilePlayer videoFile={props.videoFile}
                         textTrackFiles={props.textTrackFiles}
                         playerState={props.playerState}
                         playerActions={props.playerActions}
                         atmoDuringPlayback={props.atmoDuringPlayback} />
      </Positioner>
    );
  }
  else {
    return null;
  }
}

const videoFile = file('videoFiles', {id: props => props.videoFileId});

export default connect(
  combine({
    videoFile,
    textTrackFiles: nestedFiles('textTrackFiles', {
      parent: videoFile
    })
  })
)(VideoPlayer);
