import classNames from 'classnames';

import createContainer from '../createContainer';
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
    {load_image: props.lazy && props.loaded},
    props.className,
    typeClassName(props.page),
    thumbnailClassName(props)
  );
}

function typeClassName(page) {
  return page ? `is_${page.type.name}` : 'is_dangling';
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
    ...pageTypeCandidates(props.page)
  ];
}

function customThumbnailCandidate(props) {
  return {
    id: props.customThumbnailId,
    cssClassPrefix: 'pageflow_image_file',
    collectionName: 'image_files'
  }
}

function pageTypeCandidates(page) {
  return page ? page.type.thumbnailCandidates : [];
}

function thumbnailCandidateClassName(props, candidate) {
  return [
    props.lazy ? 'lazy' : null,
    candidate.cssClassPrefix,
    props.imageStyle,
    thumbnailCandidateId(props, candidate)
  ].filter(Boolean).join('_');
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
