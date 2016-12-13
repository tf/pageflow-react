import createFilePlayer from '../createFilePlayer';
import Positioner from './Positioner';
import sources from './sources';

const VideoFilePlayer = createFilePlayer({
  tagName: 'video',
  sources,
  poster: (videoFile, posterImageFile) => {
    return posterImageFile ? posterImageFile.urls.large : videoFile.urls['poster_large'];
  }
});

export default function(props) {
  return (
    <Positioner videoFile={props.file} fit={props.fit} position={props.position}>
      <VideoFilePlayer file={props.file}
                       posterImageFile={props.posterImageFile}
                       playerState={props.playerState}
                       playerActions={props.playerActions}
                       atmoDuringPlayback={props.atmoDuringPlayback}
                       textTracksEnabled={props.textTracksEnabled}
                       loop={props.loop} />
    </Positioner>
  );
}
