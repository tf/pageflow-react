import createModelResolver from './createModelResolver';

/**
 * Turn a page id into a page object. Registered as `"page"`.
 *
 * @param {string} options.property
 *  Name of the property to read page id from.
 *
 * @alias pageflow.react.resolvers.PageResolver
 * @class
 * @since 0.1
 */
export default createModelResolver({
  seedProperty: 'pages',
  backboneCollection: () => pageflow.pages,
  idAttribute: 'perma_id',
  attributesForProps: ['perma_id', ['type', 'template'], 'chapter_id'],
  includeConfiguration: true,
});
