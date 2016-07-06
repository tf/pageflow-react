import {Component} from 'react';

/**
 * Used inside with {@link BackgroundImage}.
 * @name PageBackground
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
