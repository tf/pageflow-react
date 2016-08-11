import SeedResolver from 'resolvers/SeedResolver';

describe('SeedResolver', () => {
  it('gets props from seed data referenced by id', () => {
    var seed = {pages: [{id: 1, title: 'Some title'}]};
    var modelResolver = new SeedResolver({
      seedProperty: 'pages',
      attributesForProps: ['title'],
      property: 'modelId'
    });

    var result = modelResolver.get({modelId: 1}, seed);

    expect(result).to.deep.eq({title: 'Some title'})
  });

  it('can map attribute names', () => {
    var seed = {pages: [{id: 1, template: 'video'}]};
    var modelResolver = new SeedResolver({
      seedProperty: 'pages',
      attributesForProps: [['type', 'template']],
      property: 'modelId'
    });

    var result = modelResolver.get({modelId: 1}, seed);

    expect(result).to.deep.eq({type: 'video'})
  });

  it('camelizes attribute names', () => {
    var seed = {pages: [{id: 1, background_image_id: 1}]};
    var modelResolver = new SeedResolver({
      seedProperty: 'pages',
      attributesForProps: ['background_image_id'],
      property: 'modelId'
    });

    var result = modelResolver.get({modelId: 1}, seed);

    expect(result).to.deep.eq({backgroundImageId: 1})
  });

  it('gets null if property is missing', () => {
    var modelResolver = new SeedResolver({
      seedProperty: 'pages',
      attributesForProps: ['title'],
      property: 'modelId'
    });

    var result = modelResolver.get({}, {});

    expect(result).to.eq(null)
  });

  it('gets null if seed is missing', () => {
    var modelResolver = new SeedResolver({
      seedProperty: 'pages',
      attributesForProps: ['title'],
      property: 'modelId'
    });

    var result = modelResolver.get({modelId: 1}, {});

    expect(result).to.eq(null)
  });

  it('can use custom id attribute', () => {
    var seed = {pages: [{perma_id: 1, title: 'Some title'}]};
    var modelResolver = new SeedResolver({
      seedProperty: 'pages',
      attributesForProps: ['title'],
      idAttribute: 'perma_id',
      property: 'modelPermaId'
    });

    var result = modelResolver.get({modelPermaId: 1}, seed);

    expect(result).to.deep.eq({title: 'Some title'})
  });

  context('with includeConfiguration option', () => {
    it('includes attributes from a nested configuration object', () => {
      var seed = {
        pages: [
          {id: 1, title: 'Some title', configuration: {setting: true}}
        ]
      };
      var modelResolver = new SeedResolver({
        seedProperty: 'pages',
        attributesForProps: ['title'],
        includeConfiguration: true,
        property: 'modelId'
      });

      var result = modelResolver.get({modelId: 1}, seed);

      expect(result).to.deep.eq({title: 'Some title', setting: true})
    });

    it('deeply camelizes configuration attribute names', () => {
      var seed = {
        pages: [
          {
            id: 1,
            title: 'Some title',
            configuration: {
              page_links: [
                {
                  image_id: 1
                }
              ]
            }
          }
        ]
      };
      var modelResolver = new SeedResolver({
        seedProperty: 'pages',
        attributesForProps: ['title'],
        includeConfiguration: true,
        property: 'modelId'
      });

      var result = modelResolver.get({modelId: 1}, seed);

      expect(result).to.deep.eq({title: 'Some title', pageLinks: [{imageId: 1}]})
    });
  });
});
