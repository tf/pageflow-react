import PageTypeResolver from 'resolvers/page_type_resolver';

describe('PageTypeResolver', () => {
  it('uses page type seed data', () => {
    var seed = {page_types: {
      audio_page: {some: 'data'}
    }};
    var pageTypeResolver = new PageTypeResolver();

    var result = pageTypeResolver.get({type: 'audio_page'}, seed);

    expect(result.some).to.eq('data');
  });

  it('sets name property to page type name', () => {
    var seed = {page_types: {}};
    var pageTypeResolver = new PageTypeResolver();

    var result = pageTypeResolver.get({type: 'audio_page'}, seed);

    expect(result.name).to.eq('audio_page');
  });
});
