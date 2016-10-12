import createModelResolver from './createModelResolver';

/**
 * Turn a chapter id into a chapter object. Registered as `"chapter"`.
 *
 * @param {string} options.property
 *  Name of the property to read chapter id from.
 *
 * @alias pageflow.react.resolvers.ChapterResolver
 * @class
 * @since 0.1
 */
export default createModelResolver({
  seedProperty: 'chapters',
  backboneCollection: () => pageflow.chapters,
  attributesForProps: ['id', 'title', 'position'],
  property: 'chapterId',
});
