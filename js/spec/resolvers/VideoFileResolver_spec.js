import VideoFileResolver from 'resolvers/VideoFileResolver';

describe('VideoFileResolver', () => {
  const seed = {
    file_url_templates: {
      video_files: {
        '4k': 'https://somehost/dir/:id_partition/4k.mp4'
      },
    },
    video_file_variants: {
      2004: ['4k'],
      2005: ['4k', 'medium']
    }
  };

  it('interpolates id into url template', () => {
    var resolver = new VideoFileResolver({
      id: props => props.videoId
    });

    var result = resolver.get({videoId: 2004}, seed);

    expect(result).to.deep.eq({
      '4k': 'https://somehost/dir/000/002/004/4k.mp4'
    });
  });

  it('raises descriptive error if id option is missing', () => {
    var resolver = new VideoFileResolver();

    expect(() => {
      resolver.get({videoId: 2004}, seed);
    }).to.throw(/as id option/);
  });

  it('returns null if video with id is not found', () => {
    var resolver = new VideoFileResolver({
      id: props => props.videoId
    });

    var result = resolver.get({videoId: 1}, seed);

    expect(result).to.eq(null);
  });

  it('skips variants that do not have an url template', () => {
    var resolver = new VideoFileResolver({
      id: props => props.videoId
    });

    var result = resolver.get({videoId: 2004}, seed);

    expect(result.medium).to.eq(undefined);
  });
});
