import React from 'react';

export default class PageLink extends React.Component {
  render() {
    return (
      <a href={this._href()} onClick={this._handleClick.bind(this)}>
        {this.props.children}
      </a>
    );
  }

  _href() {
    if (this._targetPage()) {
      return '#' + this._targetPage().perma_id;
    }
    else {
      return '#missing';
    }
  }

  _handleClick(event) {
    if (this._targetPage()) {
      pageflow.slides.goToByPermaId(this._targetPage().perma_id, {
        transition: this.props.pageLink.page_transition
      });
    }
    event.preventDefault();
  }

  _targetPage() {
    return this.props.pageLink.targetPage;
  }
};
