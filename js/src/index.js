import createPage from './create_page.jsx';
import createWidget from './create_widget.jsx';
import createContainer from './create_container.jsx';
import createPageType from './create_page_type';
import createWidgetType from './create_widget_type';
import createPageComponent from './create_page_component.jsx';
import resolve from './resolve';
import mutate from './mutate';

import classNames from 'classnames';

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

import Draggable from 'react-draggable';

import widgets from './components/widgets';

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

  /** @api public */
  createPageComponent,

  /** @api public */
  resolve,

  /** @api public */
  mutate,

  classNames,

  components: {
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

    Draggable,

    widgets
  }
};
