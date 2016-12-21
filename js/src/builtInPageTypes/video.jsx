import {Page as MediaPage,
        PageVideoPlayer,
        pageReducers as mediaPageReducers,
        pageSaga as mediaPageSaga} from 'media';

import registerPageType from 'registerPageType';

import {connectInPage} from 'pages';

import {playerState, playerActions} from 'media/selectors';
import {pageAttributes, pageAttribute} from 'pages/selectors';
import {t} from 'i18n/selectors';
import {file} from 'files/selectors';

import {combineReducers} from 'redux';
import {combine} from 'utils';

const qualities = ['auto', '4k', 'fullhd', 'medium'];

function VideoPage(props) {
  return (
    <MediaPage className="videoPage"
               page={props.page}
               file={props.videoFile}
               qualities={qualities}
               playerState={props.playerState}
               playerActions={props.playerActions}
               controlBarText={props.t('pageflow.public.start_video')}>

      <PageVideoPlayer page={props.page}
                       playerState={props.playerState}
                       playerActions={props.playerActions}/>
    </MediaPage>
  );
}

export function register() {
  registerPageType('video', {

    component: connectInPage(
      combine({
        page: pageAttributes(),
        videoFile: file('videoFiles', {id: pageAttribute('videoFileId')}),
        playerState,
        t
      }),
      combine({
        playerActions
      })
    )(VideoPage),

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
