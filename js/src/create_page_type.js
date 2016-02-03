import React from 'react';
import ReactDOM from 'react-dom';

export default function(Component) {
  return {
    scroller: false,

    enhance(pageElement) {
      this._pageHooks = {...Backbone.Events};
      this._isPreloaded = false;

      this._render(pageElement);
    },

    preload(pageElement) {
      this._isPreloaded = true;
      this._render(pageElement);
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

    resize() {
      this._pageHooks.trigger('resize');
    },

    update(pageElement, configuration) {
      pageflow.commonPageCssClasses.updateCommonPageCssClasses(pageElement, configuration);
    },

    cleanup(pageElement) {
      ReactDOM.unmountComponentAtNode(pageElement[0]);
    },

    _render(pageElement) {
      ReactDOM.render(React.createElement(Component, {
        resolverSeed: pageflow.seed,
        pageId: parseInt(pageElement.attr('id'), 10),
        pageHooks: this._pageHooks,
        isPreloaded: this._isPreloaded
      }), pageElement[0]);
    }
  };
};
