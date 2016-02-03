import {PageThumbnail} from 'components/page_thumbnail.jsx';

import renderComponent from '../support/render_component';

describe('PageThumbnail', () => {
  it('has class names for thumbnail candidate', () => {
    const page = {
      type: {
        thumbnailCandidates: [
          {
            attribute: 'thumbnailFileId',
            collectionName: 'image_files',
            cssClassPrefix: 'pageflow_image_file'
          }
        ]
      },
      thumbnailFileId: 10
    };
    const fileIds = {
      'image_files': [10]
    };

    const pageThumbnail = renderComponent(PageThumbnail, {page, fileIds, imageStyle: 'thumbnail'});
    const className = pageThumbnail.props.className;

    expect(className).to.contain('pageflow_image_file_thumbnail_10');
  });

  it('supports lazy thumbnail css class', () => {
    const page = {
      type: {
        thumbnailCandidates: [
          {
            attribute: 'thumbnailFileId',
            collectionName: 'image_files',
            cssClassPrefix: 'pageflow_image_file'
          }
        ]
      },
      thumbnailFileId: 10
    };
    const fileIds = {
      'image_files': [10]
    };

    const pageThumbnail = renderComponent(PageThumbnail, {
      page,
      fileIds,
      imageStyle: 'thumbnail',
      lazy: true
    });
    const className = pageThumbnail.props.className;

    expect(className).to.contain('lazy_pageflow_image_file_thumbnail_10');
  });

  it('adds load_image class if loaded prop is present', () => {
    const page = {
      type: {
        thumbnailCandidates: [
          {
            attribute: 'thumbnailFileId',
            collectionName: 'image_files',
            cssClassPrefix: 'pageflow_image_file'
          }
        ]
      },
      thumbnailFileId: 10
    };
    const fileIds = {
      'image_files': [10]
    };

    const pageThumbnail = renderComponent(PageThumbnail, {
      page,
      fileIds,
      imageStyle: 'thumbnail',
      lazy: true,
      loaded: true
    });
    const className = pageThumbnail.props.className;

    expect(className).to.contain('load_image');
  });

  it('skips candidates whose attributes point to non existing files', () => {
    const page = {
      type: {
        thumbnailCandidates: [
          {
            attribute: 'thumbnailFileId',
            collectionName: 'image_files',
            cssClassPrefix: 'pageflow_image_file'
          },
          {
            attribute: 'videoId',
            collectionName: 'video_files',
            cssClassPrefix: 'pageflow_video_file'
          }
        ]
      },
      thumbnailFileId: 10,
      videoId: 5
    };
    const fileIds = {
      'image_files': [],
      'video_files': [5, 10],
    };

    const pageThumbnail = renderComponent(PageThumbnail, {page, fileIds, imageStyle: 'thumbnail'});
    const className = pageThumbnail.props.className;

    expect(className).to.contain('pageflow_video_file_thumbnail_5');
  });

  it('skips candidates whose attributes are not defined', () => {
    const page = {
      type: {
        thumbnailCandidates: [
          {
            attribute: 'thumbnailFileId',
            collectionName: 'image_files',
            cssClassPrefix: 'pageflow_image_file'},
        ]
      },
    };
    const fileIds = {};

    const pageThumbnail = renderComponent(PageThumbnail, {page, fileIds});
    const className = pageThumbnail.props.className;

    expect(className).not.to.contain('pageflow_image_file');
  });

  it('prefers custom thumbnail id', () => {
    const page = {
      type: {
        thumbnailCandidates: [
          {
            attribute: 'thumbnailFileId',
            collectionName: 'image_files',
            cssClassPrefix: 'pageflow_image_file'
          }
        ]
      },
      thumbnailFileId: 10
    };
    const fileIds = {
      'image_files': [10, 11]
    };

    const pageThumbnail = renderComponent(PageThumbnail, {page, fileIds, customThumbnailId: 11, imageStyle: 'thumbnail'});
    const className = pageThumbnail.props.className;

    expect(className).to.contain('pageflow_image_file_thumbnail_11');
  });

  it('skips custom thumbnail id pointing to non existent file', () => {
    const page = {
      type: {
        thumbnailCandidates: []
      }
    };
    const fileIds = {
      'image_files': []
    };

    const pageThumbnail = renderComponent(PageThumbnail, {page, fileIds, customThumbnailId: 11, imageStyle: 'thumbnail'});
    const className = pageThumbnail.props.className;

    expect(className).not.to.contain('pageflow_image_file_thumbnail_11');
  });

  it('takes className prop', () => {
    const page = {
      type: {
        thumbnailCandidates: []
      }
    };
    const fileIds = {};

    const pageThumbnail = renderComponent(PageThumbnail, {page, fileIds, className: 'custom'});
    const className = pageThumbnail.props.className;

    expect(className).to.contain('custom');
  });

  it('sets page type modifier class name', () => {
    const page = {
      type: {
        name: 'video',
        thumbnailCandidates: []
      }
    };
    const fileIds = {};

    const pageThumbnail = renderComponent(PageThumbnail, {page, fileIds});
    const className = pageThumbnail.props.className;

    expect(className).to.contain('is_video');
  });
})
