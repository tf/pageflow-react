import {PageBackgroundImage} from 'components';

import {Page as MediaPage,
        pageReducers as mediaPageReducers,
        pageSaga as mediaPageSaga} from 'media';

import PageAudioFilePlayer from 'media/components/PageAudioFilePlayer';

import registerPageType from 'registerPageType';

import {connectInPage} from 'pages';

import {playerState, playerActions} from 'media/selectors';
import {pageAttributes, pageAttribute} from 'pages/selectors';
import {t} from 'i18n/selectors';
import {file} from 'files/selectors';

import {combineReducers} from 'redux';
import {combine} from 'utils';

function AudioPage(props) {
  return (
    <MediaPage className="audioPage"
               page={props.page}
               file={props.audioFile}
               playerState={props.playerState}
               playerActions={props.playerActions}
               controlBarText={props.t('pageflow.public.start_video')}>

      <PageBackgroundImage page={props.page} />
      <PageAudioFilePlayer file={props.audioFile}
                           playerState={props.playerState}
                           playerActions={props.playerActions} />
    </MediaPage>
  );
}

export function register() {
  registerPageType('new_audio', {

    component: connectInPage(
      combine({
        page: pageAttributes(),
        audioFile: file('audioFiles', {id: pageAttribute('audioFileId')}),
        playerState,
        t
      }),
      combine({
        playerActions
      })
    )(AudioPage),

    reducer: combineReducers({
      ...mediaPageReducers
    }),

    saga: function*() {
      yield [
        mediaPageSaga()
      ];
    }

  });
}
