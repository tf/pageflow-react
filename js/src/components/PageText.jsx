import {Component} from 'react';

export default class PageText extends Component {
  render() {
    return (
      <div className="contentText">
        <p dangerouslySetInnerHTML={this.text()} />
      </div>
    );
  }

  text() {
    return {__html: this.props.page.text};
  }
}
