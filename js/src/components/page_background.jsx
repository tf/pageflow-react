import {Component} from 'react';

/**
 * Used inside with {BackgroundImage}.
 */
export default class extends Component {
  render() {
    return (
      <div className="backgroundArea">
        {this.props.children}
      </div>
    );
  }
};
