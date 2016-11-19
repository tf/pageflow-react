import SeedResolver from './SeedResolver';
import BackboneModelResolver from './BackboneModelResolver';

/**
 * Creates a resolver that
 *
 * - resolves props from seed data outside the editor.
 * - resovles props from backbone models inside the editor.
 *
 * The resulting takes a `property` option, which determines the name
 * of prop that contains the id of the model that shall be found.
 *
 * @param {pageflow.react.resolvers.createModelResolver~backboneCollectionCallback} options.backboneCollection
 *   A function that returns the Backbone collection in which to
 *   search for the models.
 *
 * @param {string} options.seedProperty
 *   The name of the property which contains the list of models in the
 *   seed data.
 *
 * @param {string} [options.idAttribute = 'id']
 *   Name of the attribute that shall be used as the id of a
 *   model. This is used to find the record either in the seed data or
 *   the backbone collection.
 *
 * @param {string[]} [options.attributesForProps = ['id']]
 *   List of model attributes that shall be included in the resolved
 *   props.
 *
 * @param {boolean} [options.includeConfiguration = false]
 *   If the model has a configuration attribute, include all of its
 *   properties in the resolved props.
 *
 * @return {Class<Resolver>}
 *
 * @example
 *
 * resolve.register('page', createModelResolver({
 *   backboneCollection: () => pageflow.pages,
 *   seedProperty: 'pages',
 *   idAttribute: 'perma_id',
 *   attributesForProps: ['perma_id', 'chapter_id'],
 *   includeConfiguration: true
 * });
 *
 * createContainer(SomeComponent, {
 *   fragments: {
 *     linkedPage: resolve('page', {property: 'linkedPageId'})
 *   }
 * });
 *
 * @alias pageflow.react.resolvers.createModelResolver
 * @since edge
 */
export default function(options, {editorMode = PAGEFLOW_EDITOR} = {}) {
  const commonResolverOptions = {
    idAttribute: options.idAttribute || 'id',
    attributesForProps: options.attributesForProps || ['id'],
    includeConfiguration: options.includeConfiguration
  };

  if (!options.backboneCollection) {
    throw new Error('Required option backboneCollection missing.');
  }

  if (!options.seedProperty) {
    throw new Error('Required option seedProperty missing.');
  }

  return function({property} = {}, callback) {
    property = property || options.property;

    if (editorMode) {
      return new BackboneModelResolver({
        collection: options.backboneCollection,
        property,
        ...commonResolverOptions
      }, callback);
    }
    else {
      return new SeedResolver({
        seedProperty: options.seedProperty,
        property,
        ...commonResolverOptions
      }, callback);
    }
  };
}

/**
 * Signature of the function passed to {@link
 * pageflow.react.resolvers.createModelResolver|createModelResolver}
 * as `backboneCollection` option.
 *
 * @callback pageflow.react.resolvers.createModelResolver~backboneCollectionCallback
 * @return {Backbone.Collection}
 */
