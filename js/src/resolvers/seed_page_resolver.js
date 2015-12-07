import SeedResolver from './seed_resolver';

export default function(options, callback) {
  return new SeedResolver({
    seedProperty: 'pages',
    idAttribute: 'perma_id',
    attributesForProps: ['perma_id', ['type', 'template'], 'chapter_id'],
    includeConfiguration: true,
    ...options
  }, callback);
};
