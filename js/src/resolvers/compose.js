/**
 * Creates a new Resolver by transforming the results with a function.
 *
 * @param {compose~transform} transform
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
 * @name compose
 */
export default function compose(transform, InnerResolver) {
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
 * @callback compose~transform
 *
 * @param {Object} props
 *   Result of the inner resolver.
 *
 * @param {Object} seed
 *   Resolver seed data
 *
 * @return {Object}
 */
