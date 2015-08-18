import {Component} from 'react';

export default class extends Component {
  render() {
    return (
      <div className="content_and_background">
        {this.props.children}
      </div>
    );
  }
};
