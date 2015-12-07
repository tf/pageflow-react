import SeedResolver from './seed_resolver';

export default function(options, callback) {
  return new SeedResolver({
    seedProperty: 'chapters',
    attributesForProps: ['id', 'title'],
    property: 'chapterId',
    ...options
  }, callback);
};
