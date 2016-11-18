import {PageThumbnail} from '../PageThumbnail';

import {expect} from 'support/chai';
import {shallow} from 'enzyme';

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
    const props = {
      page,
      fileIds: {
        'image_files': [10]
      },
      imageStyle: 'thumbnail'
    };

    const result = shallow(<PageThumbnail {...props} />);

    expect(result).to.have.className('pageflow_image_file_thumbnail_10');
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
    const props = {
      page,
      fileIds: {
        'image_files': [10]
      },
      imageStyle: 'thumbnail',
      lazy: true
    };

    const result = shallow(<PageThumbnail {...props} />);

    expect(result).to.have.className('lazy_pageflow_image_file_thumbnail_10');
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
    const props = {
      page,
      fileIds: {
        'image_files': [10]
      },
      imageStyle: 'thumbnail',
      lazy: true,
      loaded: true
    };

    const result = shallow(<PageThumbnail {...props} />);

    expect(result).to.have.className('load_image');
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
    const props = {
      page,
      fileIds: {
        'image_files': [],
        'video_files': [5, 10],
      },
      imageStyle: 'thumbnail'
    };

    const result = shallow(<PageThumbnail {...props} />);

    expect(result).to.have.className('pageflow_video_file_thumbnail_5');
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
    const props = {
      page,
      fileIds: {}
    };

    const result = shallow(<PageThumbnail {...props} />);

    expect(result).not.to.have.className('pageflow_image_file');
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
    const props = {
      page,
      fileIds: {
        'image_files': [10, 11]
      },
      customThumbnailId: 11,
      imageStyle: 'thumbnail'
    };

    const result = shallow(<PageThumbnail {...props} />);

    expect(result).to.have.className('pageflow_image_file_thumbnail_11');
  });

  it('skips custom thumbnail id pointing to non existent file', () => {
    const page = {
      type: {
        thumbnailCandidates: []
      }
    };
    const props = {
      page,
      fileIds: {
        'image_files': []
      },
      customThumbnailId: 11,
      imageStyle: 'thumbnail'
    };

    const result = shallow(<PageThumbnail {...props} />);

    expect(result).not.to.have.className('pageflow_image_file_thumbnail_11');
  });

  it('takes className prop', () => {
    const page = {
      type: {
        thumbnailCandidates: []
      }
    };
    const props = {
      page,
      fileIds: {},
      className: 'custom'
    };

    const result = shallow(<PageThumbnail {...props} />);

    expect(result).to.have.className('custom');
  });

  it('sets page type modifier class name', () => {
    const page = {
      type: {
        name: 'video',
        thumbnailCandidates: []
      }
    };
    const props = {
      page,
      fileIds: {}
    };

    const result = shallow(<PageThumbnail {...props} />);

    expect(result).to.have.className('is_video');
  });

  context('when page is null', function() {
    it('sets is_dangling class name', () => {
      const props =  {
        page: null,
        fileIds: {}
      };

      const result = shallow(<PageThumbnail {...props} />);

      expect(result).to.have.className('is_dangling');
    });
  });
});
