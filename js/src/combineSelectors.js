export default function(selectors) {
  return function(state, props) {
    return Object.keys(selectors).reduce((result, key) => {
      result[key] = selectors[key](state, props);
      return result;
    }, {});
  };
}
