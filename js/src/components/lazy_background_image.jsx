import React from 'react';

import createPageComponent from '../create_page_component.jsx';

import BackgroundImage from './background_image.jsx';

class LazyBackgroundImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {preloaded: false};
  }

  pageWillPreload() {
    this.setState({preloaded: true});
  }

  pageWillActivate() {
    this.setState({preloaded: true});
  }

  render() {
    return (
      <BackgroundImage {...this.props} loaded={this.state.preloaded} />
    );
  }
};

export default createPageComponent(LazyBackgroundImage);
