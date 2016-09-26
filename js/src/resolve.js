import registerDefaultResolvers from 'resolvers/registerDefaults';

const resolvers = {};

export default function resolve(resolverName, options) {
  var resolver = resolvers[resolverName];

  if (!resolver) {
    throw `Unknown resolver ${resolverName}`;
  }

  return function(callback) {
    return new resolver(options, callback);
  };
}

resolve.register = function(name, Resolver) {
  if (resolvers[name]) {
    throw new Error(`A resolver with name ${name} is already registered.`);
  }
  
  resolvers[name] = Resolver;
};

registerDefaultResolvers(resolve);
