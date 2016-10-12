/**
 * Creates a new Resolver by transforming the results with a function.
 *
 * @param {pageflow.react.resolvers.compose~transformCallback} transform
 *   Function to apply to inner resolver props to get resolved props.
 *
 * @param {Class<Resolver>} InnerResolver
 *   Resolver supplying inputs to the transform function.
 *
 * @return {Class<Resolver}
 *
 * @example
 *
 * resolve.register('pageTitle',
 *                  compose(getTitle, PageResolver));
 *
 * function getTitleLength(pageProps) {
 *   return pageProps.title;
 * }
 *
 * createContainer(SomeComponent, {
 *   fragments: {
 *     linkedPageTitle: resolve('pageTitle', {
 *       property: 'linkedPageId'
 *     })
 *   }
 * });
 *
 * @alias pageflow.react.resolvers.compose
 * @since edge
 */
export default function(transform, InnerResolver) {
  return function(options, callback) {
    const inner = new InnerResolver(options, callback);

    return {
      get(props, seed) {
        return transform(inner.get(props, seed), seed);
      },

      dispose() {
        inner.dispose();
      }
    };
  };
}

/**
 * Signature of the function passed to {@link
 * pageflow.react.resolvers.compose|compose} as `transform` parameter.
 *
 * @callback pageflow.react.resolvers.compose~transformCallback
 *
 * @param {Object} props
 * Result of the inner resolver.
 *
 * @param {Object} seed
 * Resolver seed data
 *
 * @return {Object}
 */
