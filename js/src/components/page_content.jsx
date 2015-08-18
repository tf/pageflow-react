import {Component} from 'react';

import Scroller from './scroller';
import createPageComponent from '../create_page_component.jsx';

export default class PageContent extends Component {
  static contextTypes = {
    pageScroller: React.PropTypes.object
  }

  render() {
    return (
      <div className="content">
        <Scroller ref="scroller">
          <div className="contentWrapper">
            {this.props.children}
          </div>
        </Scroller>
      </div>
    );
  }

  componentDidMount() {
    this.context.pageScroller.on('disable', () => {
      this.refs.scroller.disable();
    }, this);

    this.context.pageScroller.on('enable', () => {
      this.refs.scroller.enable();
    }, this);
  }

  componentWillUnmount() {
    this.context.pageScroller.off(null, null, this);
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

export default createPageComponent(PageContent);
