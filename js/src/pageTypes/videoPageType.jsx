import {Page as MediaPage,
        PageVideoPlayer,
        reducers as mediaReducers,
        sagas as mediaSagas} from 'media';

import registerPageType from 'registerPageType';

import {connectInPage} from 'pages';

import {playerState, playerActions} from 'media/selectors';
import {pageAttributes} from 'pages/selectors';
import {t} from 'i18n/selectors';

import {combineReducers} from 'redux';
import combine from 'combineSelectors';

function VideoPage(props) {
  return (
    <MediaPage page={props.page}
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
  registerPageType('new_video', {

    component: connectInPage(
      combine({
        page: pageAttributes(),
        playerState,
        t
      }),
      combine({
        playerActions
      })
    )(VideoPage),

    reducer: combineReducers({
      ...mediaReducers
    }),

    saga: function*() {
      yield [
        ...mediaSagas
      ];
    }
  });
}
