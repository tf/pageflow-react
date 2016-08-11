import createModelResolver from './createModelResolver';

export default createModelResolver({
  seedProperty: 'chapters',
  backboneCollection: () => pageflow.chapters,
  attributesForProps: ['id', 'title', 'position'],
  property: 'chapterId',
});
