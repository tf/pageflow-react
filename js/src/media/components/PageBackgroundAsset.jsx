import {PageBackgroundImage} from 'components';
import PageBackgroundVideo from './PageBackgroundVideo';
import {playerState, playerActions} from 'media/selectors';

import {connectInPage} from 'pages';
import {pageAttributes} from 'pages/selectors';

import {combine} from 'utils';

export function PageBackgroundAsset({page, playerState, playerActions}) {
  if (page.backgroundType == 'video') {
    return (
      <PageBackgroundVideo page={page}
                           playerState={playerState}
                           playerActions={playerActions}/>
    );
  }
  else {
    return (
      <PageBackgroundImage page={page} />
    );
  }
}

export default connectInPage(
  combine({
    page: pageAttributes(),
    playerState
  }),
  combine({
    playerActions
  })
)(PageBackgroundAsset);
