import PageVideoPlayer from './PageVideoPlayer';
import MediaPlayerStateProvider from './PlayerStateProvider';

export default function PageBackgroundVideo(props) {
  return (
    <MediaPlayerStateProvider>
      <PageVideoPlayer loop={true} {...props} />
    </MediaPlayerStateProvider>
  );
}
