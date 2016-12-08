import PageVideoPlayer from './PageVideoPlayer';

export default function PageBackgroundVideo(props) {
  return (
    <PageVideoPlayer loop={true} textTracksEnabled={false} {...props} />
  );
}
