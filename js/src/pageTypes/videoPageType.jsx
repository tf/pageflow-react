import {Page as MediaPage} from 'media';
import PageVideoPlayer from 'media/PageVideoPlayer';

import registerPageType from 'registerPageType';

import {selector as page, connectInPage} from 'pages';
//import {playerState, playerActions} from 'media/selectors';
//import {reducers as mediaReducers, sagas as mediaSagas} from 'media';

//import {combineReducers} from 'redux';
import combineSelectors from 'combineSelectors';

function VideoPage(props) {
  return (
    <MediaPage page={props.page}>
      <PageVideoPlayer page={props.page}
                       playerState={props.page.state.player} />
    </MediaPage>
  );
}

const component = connectInPage(
  combineSelectors({
    page: page()
  })
)(VideoPage);

registerPageType('video', {
  component
});
