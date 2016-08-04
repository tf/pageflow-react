import React from 'react';

import PageThumbnail from './page_thumbnail.jsx';

class LazyLoadedPageThumbnail extends React.Component {
  static contextTypes = {
    pageIsPreloaded: React.PropTypes.bool
  }

  render() {
    return (
      <PageThumbnail {...this.props} lazy={true} loaded={this.context.pageIsPreloaded} />
    );
  }
};

export default LazyLoadedPageThumbnail;
