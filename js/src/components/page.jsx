import React from 'react';

export default class Page extends React.Component {
  static childContextTypes = {
    pageHooks: React.PropTypes.object,
    pageScroller: React.PropTypes.object,
    pageIsPreloaded: React.PropTypes.bool
  }

  getChildContext() {
    // TODO: Should be moved to PageContent once React switches to parent based contexts.
    this._pageScroller = this._pageScroller || _.extend({
      disable() {
        this.trigger('disable');
      },
      enable() {
        this.trigger('enable');
      }
    }, Backbone.Events);

    return {
      pageHooks: this.props.pageHooks,
      pageScroller: this._pageScroller,
      pageIsPreloaded: this.props.isPreloaded
    };
  }
};
