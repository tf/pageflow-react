/*global module*/

import createPage from './createPage';
import createWidget from './createWidget';
import createContainer from './createContainer';
import createPageType from './createPageType';
import createWidgetType from './createWidgetType';
import withPageLifecycle from './withPageLifecycle';
import withPageStateProp from './withPageStateProp';
import resolve from './resolve';
import mutate from './mutate';

import classNames from 'classnames';

import PageWithInteractiveBackground from './components/PageWithInteractiveBackground';

import PageWrapper from './components/PageWrapper';
import PageBackground from './components/PageBackground';
import PageShadow from './components/PageShadow';
import PageContent from './components/PageContent';
import PageHeader from './components/PageHeader';
import PageText from './components/PageText';
import BackgroundImage from './components/BackgroundImage';
import PageBackgroundImage from './components/PageBackgroundImage';
import PageLink from './components/PageLink';
import PageThumbnail from './components/PageThumbnail';
import LazyLoadedPageThumbnail from './components/LazyLoadedPageThumbnail';
import Icon from './components/Icon';

import iconMapping from './components/icons/mapping';
import SvgIcon from './components/icons/Container';

import Draggable from 'react-draggable';

import ServerSidePage from 'pages/ServerSidePage';

import {register as registerBuiltInPageTypes} from 'pageTypes';
registerBuiltInPageTypes();

import pageflow from 'pageflow';
import boot from 'boot';

if (pageflow.events) {
  pageflow.events.on('seed:loaded', () => boot(pageflow));
}

// `export default` does not play well with Webpack's `libraryTarget:
// 'assign'` at the moment. See
// https://github.com/webpack/webpack/issues/706
module.exports = {
  createContainer,

  createPage,

  createWidget,

  createPageType,

  createWidgetType,

  withPageLifecycle,

  // deprecated
  createPageComponent: withPageLifecycle,

  withPageStateProp,

  resolve,

  mutate,

  iconMapping,

  SvgIcon,

  classNames,

  ServerSidePage,

  components: {
    PageWithInteractiveBackground,

    Icon,

    PageWrapper,
    PageBackground,
    PageShadow,
    PageContent,
    PageHeader,
    PageText,
    BackgroundImage,
    PageBackgroundImage,
    PageLink,
    PageThumbnail,
    LazyLoadedPageThumbnail,

    Draggable
  }
};
