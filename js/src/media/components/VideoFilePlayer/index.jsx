import createFilePlayer from '../createFilePlayer';
import Positioner from './Positioner';

const VideoFilePlayer = createFilePlayer({
  tagName: 'video',
  sources: (videoFile, quality) => {
    if (quality == 'medium') {
      return [
        {
          type: 'video/mp4',
          src: `${videoFile.urls.medium}?u=1`
        }
      ];
    }
    else {
      return [
        {
          type: 'application/x-mpegURL',
          src: `${videoFile.urls['hls-playlist']}?u=1`
        },
        {
          type: 'video/mp4',
          src: `${videoFile.urls.high}?u=1`
        }
      ];
    }
  }
});

export default function(props) {
  return (
    <Positioner videoFile={props.file} position={props.position}>
      <VideoFilePlayer file={props.file}
                       playerState={props.playerState}
                       playerActions={props.playerActions}
                       atmoDuringPlayback={props.atmoDuringPlayback}
                       textTracksEnabled={props.textTracksEnabled}
                       loop={props.loop} />
    </Positioner>
  );
}
