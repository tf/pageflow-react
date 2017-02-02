import BackboneModelResolver from './backbone_model_resolver';

export default function(options, callback) {
  return new BackboneModelResolver({
    collection: () => pageflow.entry.widgets,
    attributesForProps: ['type_name'],
    includeConfiguration: true,
    ...options
  }, callback);
};