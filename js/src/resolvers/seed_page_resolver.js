import SeedResolver from './seed_resolver';

import pageflow from 'pageflow';

export default function(options, callback) {
  return new SeedResolver(_.extend({
    seed: () => pageflow.pages,
    idAttribute: 'perma_id',
    attributesForProps: ['perma_id', {type: 'template'}],
    includeConfiguration: true
  }, options), callback);
};
