import React from 'react';

export default class PageLink extends React.Component {
  render() {
    return (
      <a href={this.href()}>
        {this.props.children}
      </a>
    );
  }

  href() {
    if (this.props.page) {
      return '#' + this.props.page.perma_id;
    }
    else {
      return '#missing';
    }
  }
};
