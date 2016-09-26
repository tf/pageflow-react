import createPage from './create_page.jsx';
import createWidget from './create_widget.jsx';
import createContainer from './create_container.jsx';
import createPageType from './create_page_type';
import createWidgetType from './create_widget_type';
import withPageLifecycle from './withPageLifecycle.jsx';
import resolve from './resolve';
import mutate from './mutate';

import classNames from 'classnames';

import PageWithInteractiveBackground from './components/PageWithInteractiveBackground.jsx';

import PageWrapper from './components/page_wrapper.jsx';
import PageBackground from './components/page_background.jsx';
import PageShadow from './components/page_shadow.jsx';
import PageContent from './components/page_content.jsx';
import PageHeader from './components/page_header.jsx';
import PageText from './components/page_text.jsx';
import BackgroundImage from './components/background_image.jsx';
import PageBackgroundImage from './components/page_background_image.jsx';
import PageLink from './components/page_link.jsx';
import PageThumbnail from './components/page_thumbnail.jsx';
import LazyLoadedPageThumbnail from './components/lazy_loaded_page_thumbnail.jsx';
import Icon from './components/Icon';

import iconMapping from './components/icons/mapping';
import SvgIcon from './components/icons/Container';

import Draggable from 'react-draggable';

export default {
  /** @api public */
  createContainer,

  /** @api public */
  createPage,

  /** @api public */
  createWidget,

  /** @api public */
  createPageType,

  /** @api public */
  createWidgetType,

  withPageLifecycle,

  /** @deprecated Use withPageLifecycle instead. */
  createPageComponent: withPageLifecycle,


  /** @api public */
  resolve,

  /** @api public */
  mutate,

  iconMapping,

  SvgIcon,

  classNames,

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
