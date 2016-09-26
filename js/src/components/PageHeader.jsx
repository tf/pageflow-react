import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <div className="page_header">
        <h2>
          <span className="tagline">{this.props.page.tagline}</span>
          <span className="title">{this.props.page.title}</span>
          <span className="subtitle">{this.props.page.subtitle}</span>
        </h2>
      </div>
    );
  }
};
