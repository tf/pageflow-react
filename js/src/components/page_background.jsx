import {Component} from 'react';

/**
 * Used inside with {@link BackgroundImage}.
 */
export default class PageBackground extends Component {
  render() {
    return (
      <div className="backgroundArea">
        {this.props.children}
      </div>
    );
  }
};
