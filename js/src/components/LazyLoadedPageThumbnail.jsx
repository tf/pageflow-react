import PageThumbnail from './PageThumbnail';
import {connectInPage} from 'pages';
import {pageIsPreloaded} from 'pages/selectors';
import combine from 'combineSelectors';

export default connectInPage(combine({
  loaded: pageIsPreloaded(),
  lazy: true
}))(PageThumbnail);
