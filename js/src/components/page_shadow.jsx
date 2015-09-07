import React from 'react';

export default class PageShadow extends React.Component {
  render() {
    return (
      <div className="shadow_wrapper">
        <div className="shadow" style={this.style()} />
      </div>
    );
  }

  style() {
    if ('gradientOpacity' in this.props.page) {
      return {
        opacity: this.props.page.gradientOpacity / 100
      };
    }
  }
};
