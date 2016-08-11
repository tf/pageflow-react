import createModelResolver from './createModelResolver';

export default createModelResolver({
  seedProperty: 'pages',
  backboneCollection: () => pageflow.pages,
  idAttribute: 'perma_id',
  attributesForProps: ['perma_id', ['type', 'template'], 'chapter_id'],
  includeConfiguration: true,
});
