import SeedResolver from 'resolvers/seed_resolver';

describe('SeedResolver', () => {
  it('gets props from seed data referenced by id', () => {
    var seed = [{id: 1, title: 'Some title'}];
    var modelResolver = new SeedResolver({
      seed: () => seed,
      attributesForProps: ['title'],
      property: 'modelId'
    });

    var result = modelResolver.get({modelId: 1});

    expect(result).to.deep.eq({title: 'Some title'})
  });

  it('can map attribute names', () => {
    var seed = [{id: 1, template: 'video'}];
    var modelResolver = new SeedResolver({
      seed: () => seed,
      attributesForProps: [{type: 'template'}],
      property: 'modelId'
    });

    var result = modelResolver.get({modelId: 1});

    expect(result).to.deep.eq({type: 'video'})
  });

  it('gets null if property is missing', () => {
    var modelResolver = new SeedResolver({
      seed: () => {},
      attributesForProps: ['title'],
      property: 'modelId'
    });

    var result = modelResolver.get({});

    expect(result).to.eq(null)
  });

  it('gets null if seed is missing', () => {
    var modelResolver = new SeedResolver({
      seed: () => {},
      attributesForProps: ['title'],
      property: 'modelId'
    });

    var result = modelResolver.get({modelId: 1});

    expect(result).to.eq(null)
  });

  it('can use custom id attribute', () => {
    var seed = [{perma_id: 1, title: 'Some title'}];
    var modelResolver = new SeedResolver({
      seed: () => seed,
      attributesForProps: ['title'],
      idAttribute: 'perma_id',
      property: 'modelPermaId'
    });

    var result = modelResolver.get({modelPermaId: 1});

    expect(result).to.deep.eq({title: 'Some title'})
  });

  context('with includeConfiguration option', () => {
    it('includes attributes from a nested configuration object', () => {
      var seed = [{id: 1, title: 'Some title', configuration: {setting: true}}];
      var modelResolver = new SeedResolver({
        seed: () => seed,
        attributesForProps: ['title'],
        includeConfiguration: true,
        property: 'modelId'
      });

    var result = modelResolver.get({modelId: 1});

    expect(result).to.deep.eq({title: 'Some title', setting: true})
    });
  });
});