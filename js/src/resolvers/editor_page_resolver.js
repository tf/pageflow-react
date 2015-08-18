import BackboneModelResolver from './backbone_model_resolver';
import pageflow from 'pageflow';

import _ from 'underscore';

export default function(options, callback) {
  return new BackboneModelResolver(_.extend({
    collection: () => pageflow.pages,
    idAttribute: 'perma_id',
    attributesForProps: ['perma_id', 'type'],
    includeConfiguration: true
  }, options), callback);
};
