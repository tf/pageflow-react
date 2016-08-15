import React from 'react';

import Scroller from './scroller';
import createPageComponent from '../create_page_component.jsx';

export default class PageScroller extends React.Component {
  static childContextTypes = {
    pageScroller: React.PropTypes.object
  }

  getChildContext() {
    this._pageScroller = this._pageScroller || {
      disable: () => {
        this.refs.scroller.disable();
      },
      enable: () => {
        this.refs.scroller.enable();
      }
    };

    return {
      pageScroller: this._pageScroller,
    };
  }

  render() {
    return (
      <Scroller ref="scroller">
        <div className="contentWrapper">
          {this.props.children}
        </div>
      </Scroller>
    );
  }

  pageWillActivate(options) {
    this.refs.scroller.resetPosition({position: options.position})
  }

  pageDidActivate() {
    this.refs.scroller.enable()
  }

  pageWillDeactivate() {
    this.refs.scroller.disable()
  }
};

export default createPageComponent(PageScroller);
