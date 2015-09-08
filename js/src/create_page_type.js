import React from 'react';
import _ from 'underscore';
import {Events} from 'backbone';

import camelize from './utils/camelize';

export default function(Component) {
  return {
    scroller: false,

    enhance(pageElement, configuration) {
      this._pageHooks = _.extend({}, Events);
      this._isPreloaded = false;

      this._render(pageElement, configuration);
    },

    preload(pageElement, configuration) {
      this._isPreloaded = true;
      this._render(pageElement, configuration);
    },

    activating(elelement, configuration, options) {
      this._pageHooks.trigger('activating', options);
    },

    activated() {
      this._pageHooks.trigger('activated');
    },

    deactivating() {
      this._pageHooks.trigger('deactivating');
    },

    deactivated() {
      this._pageHooks.trigger('deactivated');
    },

    update(pageElement, configuration) {
      this._render(pageElement, configuration.attributes);
      pageflow.commonPageCssClasses.updateCommonPageCssClasses(pageElement, configuration);
    },

    _render(pageElement, configuration) {
      React.render(React.createElement(Component, {
        page: camelize.keys(configuration),
        pageHooks: this._pageHooks,
        isPreloaded: this._isPreloaded
      }), pageElement[0]);
    }
  };
};
