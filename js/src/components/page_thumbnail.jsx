import classNames from 'classnames';

import createContainer from '../create_container.jsx';
import resolve from '../resolve';
import camelize from '../utils/camelize';

export function PageThumbnail(props) {
  return (
    <div className={className(props)} />
  );
};

PageThumbnail.defaultProps = {
  imageStyle: 'navigation_thumbnail_large'
};

function className(props) {
  return classNames(
    props.className,
    thumbnailClassName(props),
    `is_${props.page.type.name}`
  );
}

function thumbnailClassName(props) {
  var candidate = firstPresentCandidate(props);

  if (candidate) {
    return thumbnailCandidateClassName(props, candidate);
  }
}

function firstPresentCandidate(props) {
  return thumbnailCandidates(props).find(candidate => {
    var id = thumbnailCandidateId(props, candidate);
    var ids = props.fileIds[candidate.collectionName] || [];

    return (id && ids.includes(id));
  });
}

function thumbnailCandidates(props) {
  return [
    customThumbnailCandidate(props),
    ...props.page.type.thumbnailCandidates
  ];
}

function customThumbnailCandidate(props) {
  return {
    id: props.customThumbnailId,
    cssClassPrefix: 'pageflow_image_file',
    collectionName: 'image_files'
  }
}

function thumbnailCandidateClassName(props, candidate) {
  return [
    candidate.cssClassPrefix,
    props.imageStyle,
    thumbnailCandidateId(props, candidate)
  ].join('_');
}

function thumbnailCandidateId(props, candidate) {
  return 'id' in candidate ? candidate.id : props.page[camelize(candidate.attribute)];
}

export default createContainer(PageThumbnail, {
  fragments: {
    page: {
      type: resolve('pageType')
    },
    fileIds: resolve('fileIds')
  }
});
