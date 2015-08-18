import createContainer from './create_container.jsx';
import createPageType from './create_page_type';
import createPageComponent from './create_page_component.jsx';
import resolve from './resolve';
import mutate from './mutate';

import Page from './components/page.jsx';
import PageWrapper from './components/page_wrapper.jsx';
import PageBackground from './components/page_background.jsx';
import PageContent from './components/page_content.jsx';
import PageHeader from './components/page_header.jsx';
import BackgroundImage from './components/background_image.jsx';
import PageBackgroundImage from './components/page_background_image.jsx';
import PageLink from './components/page_link.jsx';
import PageThumbnail from './components/page_thumbnail.jsx';

import Draggable from 'react-draggable';

export default {
  /** @api public */
  createContainer,

  /** @api public */
  createPageType,

  /** @api public */
  createPageComponent,

  /** @api public */
  resolve,

  /** @api public */
  mutate,

  components: {
    Page,
    PageWrapper,
    PageBackground,
    PageContent,
    PageHeader,
    BackgroundImage,
    PageBackgroundImage,

    PageLink,
    PageThumbnail,

    Draggable
  }
};