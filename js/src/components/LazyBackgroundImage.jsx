import BackgroundImage from './BackgroundImage';

import {connectInPage} from 'pages';
import {pageIsPreloaded} from 'pages/selectors';
import combine from 'combineSelectors';

export default connectInPage(combine({
  loaded: pageIsPreloaded()
}))(BackgroundImage);
