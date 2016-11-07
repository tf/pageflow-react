import createFileResolver from 'resolvers/createFileResolver';

describe('createFileResolver creates Resolver that', () => {
  const seed = {
    file_url_templates: {
      some_files: {
        '4k': 'https://somehost/dir/:id_partition/4k.mp4'
      },
    },
    some_files: [
      {id: 2004, variants: ['4k']},
      {id: 2005, variants: ['4k', 'medium']}
    ]
  };

  it('interpolates id into url template', () => {
    var Resolver = createFileResolver({
      collectionName: 'some_files'
    });
    var resolver = new Resolver({
      property: 'fileId'
    });

    var result = resolver.get({fileId: 2004}, seed);

    expect(result['4k']).to.eq('https://somehost/dir/000/002/004/4k.mp4');
  });

  it('returns null if video with id is not found', () => {
    var Resolver = createFileResolver({
      collectionName: 'some_files'
    });
    var resolver = new Resolver({
      property: 'fileId'
    });

    var result = resolver.get({fileId: 1}, seed);

    expect(result).to.eq(null);
  });

  it('skips variants that do not have an url template', () => {
    var Resolver = createFileResolver({
      collectionName: 'some_files'
    });
    var resolver = new Resolver({
      property: 'fileId'
    });

    var result = resolver.get({fileId: 2004}, seed);

    expect(result.medium).to.eq(undefined);
  });
});
