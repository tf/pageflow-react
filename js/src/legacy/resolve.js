import registerDefaultResolvers from './resolvers/registerDefaults';

const resolvers = {};

/**
 * Use inside {@link pageflow.react.createContainer|createContainer}
 * calls to map prop names to resolvers.
 *
 * See {@link pageflow.react.resolvers} for a list of available
 * resolvers.
 *
 * @param {string} resolverName
 *   The registered name of the resolver to use.
 *
 * @param {Object} options
 *   Options to pass to the resolver.
 *
 * @return {function}
 *
 * @alias pageflow.react.resolve
 * @since 0.1
 */
export default function resolve(resolverName, options) {
  var resolver = resolvers[resolverName];

  if (!resolver) {
    throw `Unknown resolver ${resolverName}`;
  }

  return function(callback) {
    return new resolver(options, callback);
  };
}

/**
 * Register a new resolver with the given name.
 *
 * @param {string} name
 *   Name the resolver shall be referred to in
 *   {@link pageflow.react.resolve|resolve}.
 *
 * @param {Class<pageflow.react.Resolver}
 *   Constructor function of the resolver.
 *
 * @alias pageflow.react.resolve.register
 * @since 0.1
 */
resolve.register = function(name, Resolver) {
  if (resolvers[name]) {
    throw new Error(`A resolver with name ${name} is already registered.`);
  }

  resolvers[name] = Resolver;
};

registerDefaultResolvers(resolve);
