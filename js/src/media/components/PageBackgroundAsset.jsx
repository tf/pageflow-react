import {PageBackgroundImage} from 'components';
import PageBackgroundVideo from './PageBackgroundVideo';
import {playerState, playerActions} from 'media/selectors';

import {connectInPage} from 'pages';
import {pageAttributes} from 'pages/selectors';

import {combine} from 'utils';

export function PageBackgroundAsset({page,
                                     playerState, playerActions,
                                     propertyNamePrefix}) {

  const typePropertyName = propertyNamePrefix ? `${propertyNamePrefix}BackgroundType` : 'backgroundType';

  if (page[typePropertyName] == 'video') {
    const videoPropertyBaseName = propertyNamePrefix && `${propertyNamePrefix}VideoFile`;
    const posterImagePropertyBaseName = propertyNamePrefix && `${propertyNamePrefix}PosterImage`;

    return (
      <PageBackgroundVideo page={page}
                           playerState={playerState}
                           playerActions={playerActions}
                           videoPropertyBaseName={videoPropertyBaseName}
                           posterImagePropertyBaseName={posterImagePropertyBaseName} />
    );
  }
  else {
    const imagePropertyBaseName = propertyNamePrefix && `${propertyNamePrefix}BackgroundImage`;

    return (
      <PageBackgroundImage page={page}
                           imagePropertyBaseName={imagePropertyBaseName} />
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
