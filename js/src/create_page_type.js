import React from 'react';
import _ from 'underscore';
import {Events} from 'backbone';

import camelize from './utils/camelize';

export default function(Component) {
  return {
    scroller: false,

    enhance(pageElement, configuration) {
      this.pageHooks = _.extend({}, Events);

      React.render(React.createElement(Component, {
        page: camelize.keys(configuration),
        pageHooks: this.pageHooks
      }), pageElement[0]);
    },

    preload() {
      this.pageHooks.trigger('preload');
    },

    activating(elelement, configuration, options) {
      this.pageHooks.trigger('activating', options);
    },

    activated() {
      this.pageHooks.trigger('activated');
    },

    deactivating() {
      this.pageHooks.trigger('deactivating');
    },

    deactivated() {
      this.pageHooks.trigger('deactivated');
    },

    update(pageElement, configuration) {
      React.render(React.createElement(Component, {
        page: camelize.keys(configuration.attributes),
        pageHooks: this.pageHooks
      }), pageElement[0]);
    }
  };
};
