import classNames from 'classnames';

import {connectInPage} from 'pages';
import {pageType} from 'pageTypes/selectors';
import {fileIds} from 'files/selectors';

import {combine, camelize} from 'utils';

export function PageThumbnail(props) {
  return (
    <div className={className(props)} />
  );
}

PageThumbnail.defaultProps = {
  imageStyle: 'navigation_thumbnail_large'
};

function className(props) {
  return classNames(
    {load_image: props.lazy && props.loaded},
    props.className,
    typeClassName(props.pageType),
    thumbnailClassName(props)
  );
}

function typeClassName(pageType) {
  return pageType ? `is_${pageType.name}` : 'is_dangling';
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
    ...pageTypeCandidates(props.pageType)
  ];
}

function customThumbnailCandidate(props) {
  return {
    id: props.customThumbnailId,
    cssClassPrefix: 'pageflow_image_file',
    collectionName: 'image_files'
  };
}

function pageTypeCandidates(pageType) {
  return pageType ? pageType.thumbnailCandidates : [];
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

export default connectInPage(combine({
  pageType: pageType({page: props => props.page}),
  fileIds: fileIds('imageFiles')
}))(PageThumbnail);
