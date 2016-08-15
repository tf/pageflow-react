import {Component} from 'react';
import classNames from 'classnames';

export default class extends Component {
  render() {
    return (
      <div className={classNames('content_and_background', this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}
