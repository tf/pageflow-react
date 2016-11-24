import VideoPlayer from './VideoPlayer';

import {connectInPage} from 'pages';
import {pageIsPrepared, pageAttribute} from 'pages/selectors';

import {combine} from 'utils';

export function PageVideoPlayer(props) {
  const page = props.page;
  const property = props.videoPropertyBaseName;

  if (props.pageIsPrepared) {
    return (
      <VideoPlayer videoFileId={page[`${property}Id`]}
                   playerState={props.playerState}
                   playerActions={props.playerActions}
                   atmoDuringPlayback={props.atmoDuringPlayback}
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

export default connectInPage(combine({
  pageIsPrepared: pageIsPrepared(),
  atmoDuringPlayback: pageAttribute('atmoDuringPlayback')
}))(PageVideoPlayer);
