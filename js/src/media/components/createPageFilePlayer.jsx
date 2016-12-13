import {connectInPage} from 'pages';
import {pageIsPrepared, pageAttribute} from 'pages/selectors';

import {combine} from 'utils';

export default function(FilePlayer) {
  function PageFilePlayer(props) {
    if (props.file && props.pageIsPrepared) {
      return (
        <FilePlayer file={props.file}
                    posterImageFile={props.posterImageFile}
                    playerState={props.playerState}
                    playerActions={props.playerActions}
                    atmoDuringPlayback={props.atmoDuringPlayback}
                    fit={props.fit}
                    position={props.position}
                    loop={props.loop}
                    textTracksEnabled={props.textTracksEnabled} />
      );
    }
    else {
      return null;
    }
  }

  return connectInPage(combine({
    pageIsPrepared: pageIsPrepared(),
    atmoDuringPlayback: pageAttribute('atmoDuringPlayback')
  }))(PageFilePlayer);
}
