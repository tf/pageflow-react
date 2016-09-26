import {Component} from 'react';

export default class extends Component {
  render() {
    return (
      <div className="backgroundArea">
        {this.props.children}
      </div>
    );
  }
};
