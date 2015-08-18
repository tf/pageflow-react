import EditorPageResolver from './resolvers/editor_page_resolver';
import SeedPageResolver from './resolvers/seed_page_resolver';

var resolvers;

if (PAGEFLOW_EDITOR) {
  resolvers = {
    page: EditorPageResolver
  };
}
else {
  resolvers = {
    page: SeedPageResolver
  };
}

export default function(resolverName, options) {
  var resolver = resolvers[resolverName];

  if (!resolver) {
    throw `Unknown resolver ${resolverName}`;
  }

  return function(callback) {
    return new resolver(options, callback);
  }
};
