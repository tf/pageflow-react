import SeedResolver from './seed_resolver';

export default function(options, callback) {
  return new SeedResolver({
    seedProperty: 'widgets',
    idAttribute: 'role',
    attributesForProps: ['type_name'],
    includeConfiguration: true,
    ...options
  }, callback);
};
