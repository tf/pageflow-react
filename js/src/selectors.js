import {
  pageAttributes,
  pageIsActive,
  pageIsPrepared
} from 'pages/selectors';

import {
  currentParentPageAttributes,
  currentParentChapterAttributes
} from 'current/selectors';

import {
  t
} from 'i18n/selectors';

import {
  setting
} from 'settings/selectors';

import {
  file
} from 'files/selectors';

export {
  pageAttributes,
  pageIsActive,
  pageIsPrepared,

  currentParentPageAttributes,
  currentParentChapterAttributes,

  t,

  setting,
  file
};