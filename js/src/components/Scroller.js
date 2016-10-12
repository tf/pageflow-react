import {Component} from 'react';
import ReactDom from 'react-dom';

class Scroller extends Component {
  render() {
    return (
      <div ref="wrapper" className="scroller"><div>{this.props.children}</div></div>
    );
  }

  componentDidMount() {
    if (typeof jQuery !== 'undefined') {
      var element = jQuery(ReactDOM.findDOMNode(this.refs.wrapper));

      element.scroller();
      window.sss = this.scroller = element.scroller('instance');
    }
  }

  componentDidUpdate() {
    this.scroller.refresh();
  }

  enable() {
    this.scroller.enable();
    this.scroller.afterAnimationHook();
  }

  disable() {
    this.scroller.disable();
  }

  resetPosition(options) {
    this.scroller.resetPosition(options);
  }

  resetPosition(options) {
    this.scroller.resetPosition(options);
  }
};

export default Scroller;
