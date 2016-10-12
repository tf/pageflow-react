import React from 'react';

import Scroller from './Scroller';
import withPageLifecycle from '../withPageLifecycle.jsx';

/**
 * @desc Can be used inside
 * {@link pageflow.react.components.PageForeground|PageForeground} to
 * build the default page structure.
 *
 * @alias pageflow.react.components.PageScroller
 * @since edge
 */
class PageScroller extends React.Component {
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
    this.refs.scroller.resetPosition({position: options.position});
  }

  pageDidActivate() {
    this.refs.scroller.enable();
  }

  pageWillDeactivate() {
    this.refs.scroller.disable();
  }
}

PageScroller.childContextTypes = {
  pageScroller: React.PropTypes.object
};

export default withPageLifecycle(PageScroller);
