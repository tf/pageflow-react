import VideoFileResolver from 'resolvers/VideoFileResolver';

describe('VideoFileResolver', () => {
  const seed = {
    file_url_templates: {
      video_files: {
        '4k': 'https://somehost/dir/:id_partition/4k.mp4',
        poster: 'https://somehost/dir/:id_partition/poster.jpg'
      },
    },
    video_files: [
      {id: 2004, variants: ['4k', 'poster']}
    ]
  };

  it('interpolates id into url template', () => {
    var resolver = new VideoFileResolver({
      property: 'videoId'
    });

    var result = resolver.get({videoId: 2004}, seed);

    expect(result['4k']).to.eq('https://somehost/dir/000/002/004/4k.mp4');
    expect(result.poster).to.eq('https://somehost/dir/000/002/004/poster.jpg');
  });
});
