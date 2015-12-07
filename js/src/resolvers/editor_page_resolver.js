import BackboneModelResolver from './backbone_model_resolver';

export default function(options, callback) {
  return new BackboneModelResolver({
    collection: () => pageflow.pages,
    idAttribute: 'perma_id',
    attributesForProps: ['perma_id', ['type', 'template'], 'chapter_id'],
    includeConfiguration: true,
    ...options
  }, callback);
};
