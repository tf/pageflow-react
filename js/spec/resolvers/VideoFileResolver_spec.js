import VideoFileResolver from 'resolvers/VideoFileResolver';

describe('VideoFileResolver', () => {
  const seed = {
    file_url_templates: {
      video_files: {
        '4k': 'https://somehost/dir/:id_partition/4k.mp4'
      },
    },
    video_files: [
      {id: 2004, variants: ['4k']},
      {id: 2005, variants: ['4k', 'medium']}
    ]
  };

  it('interpolates id into url template', () => {
    var resolver = new VideoFileResolver({
      property: 'videoId'
    });

    var result = resolver.get({videoId: 2004}, seed);

    expect(result).to.deep.eq({
      '4k': 'https://somehost/dir/000/002/004/4k.mp4'
    });
  });

  it('returns null if video with id is not found', () => {
    var resolver = new VideoFileResolver({
      property: 'videoId'
    });

    var result = resolver.get({videoId: 1}, seed);

    expect(result).to.eq(null);
  });

  it('skips variants that do not have an url template', () => {
    var resolver = new VideoFileResolver({
      property: 'videoId'
    });

    var result = resolver.get({videoId: 2004}, seed);

    expect(result.medium).to.eq(undefined);
  });
});
