import BackboneModelResolver from './backbone_model_resolver';

export default function(options, callback) {
  return new BackboneModelResolver({
    collection: () => pageflow.chapters,
    attributesForProps: ['id', 'title', 'position'],
    property: 'chapterId',
    ...options
  }, callback);
};
