import React from 'react';

import createPageComponent from '../create_page_component.jsx';

import BackgroundImage from './background_image.jsx';

class LazyBackgroundImage extends React.Component {
  static contextTypes = {
    pageIsPreloaded: React.PropTypes.bool
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BackgroundImage {...this.props} loaded={this.context.pageIsPreloaded} />
    );
  }
};

export default createPageComponent(LazyBackgroundImage);
