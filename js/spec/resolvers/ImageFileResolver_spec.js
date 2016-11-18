import ImageFileResolver from 'resolvers/ImageFileResolver';

describe('ImageFileResolver', () => {
  const seed = {
    file_url_templates: {
      image_files: {
        ultra: 'https://somehost/dir/:id_partition/ultra.jpg'
      },
    },
    image_files: [
      {id: 2004, variants: ['ultra']}
    ]
  };

  it('interpolates id into url template', () => {
    var resolver = new ImageFileResolver({
      property: 'imageId'
    });

    var result = resolver.get({imageId: 2004}, seed);

    expect(result.ultra).to.eq('https://somehost/dir/000/002/004/ultra.jpg');
  });
});
