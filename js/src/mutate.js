import MutationResolver from 'resolvers/MutationResolver';

export default function(mutationName, props) {
  return function(callback) {
    return new MutationResolver({
      name: mutationName,
      props
    }, callback);
  };
}
