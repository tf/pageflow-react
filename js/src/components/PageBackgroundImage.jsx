import React from 'react';

import LazyBackgroundImage from './LazyBackgroundImage';

/**
 * @desc Can be used inside {@link
 * pageflow.react.components.PageBackground|PageBackground} to display
 * the background image specified in the page configuration.
 *
 * @alias pageflow.react.components.PageBackgroundImage
 * @class
 * @since 0.1
 *
 * @prop page
 *   Required. The page object to read configuration properties from.
 *
 * @prop imagePropertyBaseName
 *   By default the configuration property `backgroundImage` is
 *   used. Use this prop to specify a different property name.
 */
export default class PageBackgroundImage extends React.Component {
  render() {
    const page = this.props.page;
    const property = this.props.imagePropertyBaseName;

    return (
      <LazyBackgroundImage imageFileId={page[`${property}Id`]}
                           position={[page[`${property}X`], page[`${property}Y`]]}
                           className="background background_image" />
    );
  }
}

PageBackgroundImage.propTypes = {
  page: React.PropTypes.object.isRequired,
  imagePropertyBaseName: React.PropTypes.string
};

PageBackgroundImage.defaultProps = {
  imagePropertyBaseName: 'backgroundImage'
};
