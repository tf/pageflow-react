import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Create a page type from the given component.
 *
 * @param {React.Component} Component
 *   The component which renders the page contents.
 *
 * @return {Class<pageflow.PageType>}
 *
 * @alias pageflow.react.createPageType
 * @since 0.1
 */
export default function(Component) {
  return {
    scroller: false,

    enhance(pageElement) {
      this._pageHooks = {...Backbone.Events};
      this._isPreloaded = false;
      this._isPrepared = false;

      this._render(pageElement);
    },

    preload(pageElement) {
      this._isPreloaded = true;
      this._render(pageElement);
    },

    prepare(pageElement) {
      this._prepare(pageElement);
      this._pageHooks.trigger('prepare');
    },

    unprepare(pageElement) {
      this._scheduleUnprepare(pageElement);
      this._pageHooks.trigger('unprepare');
    },

    activating(pageElement, configuration, options) {
      this._isActive = true;

      this._prepare(pageElement);
      this._pageHooks.trigger('activating', options);
    },

    activated() {
      this._pageHooks.trigger('activated');
    },

    deactivating(pageElement) {
      this._isActive = false;
      this._render(pageElement);

      this._pageHooks.trigger('deactivating');
    },

    deactivated(pageElement) {
      this._scheduleUnprepare(pageElement);
      this._pageHooks.trigger('deactivated');
    },

    resize() {
      this._pageHooks.trigger('resize');
    },

    update(pageElement, configuration) {
      pageflow.commonPageCssClasses.updateCommonPageCssClasses(pageElement, configuration);
    },

    cleanup(pageElement) {
      ReactDOM.unmountComponentAtNode(pageElement[0]);
    },

    _scheduleUnprepare(pageElement) {
      if (!this._unprepareTimeout) {
        this._unprepareTimeout = setTimeout(() => {
          this._isPrepared = false;
          this._render(pageElement);
        }, 5000);
      }
    },

    _prepare(pageElement) {
      if (this._unprepareTimeout) {
        clearTimeout(this._unprepareTimeout);
        this._unprepareTimeout = null;
      }

      this._isPrepared = true;
      this._render(pageElement);
    },

    _render(pageElement) {
      ReactDOM.render(React.createElement(Component, {
        resolverSeed: pageflow.seed,
        pageId: parseInt(pageElement.attr('id'), 10),
        pageHooks: this._pageHooks,
        scrollIndicator: this.scrollIndicator,
        isPreloaded: this._isPreloaded,
        isPrepared: this._isPrepared,
        isActive: this._isActive
      }), pageElement[0]);
    }
  };
};
