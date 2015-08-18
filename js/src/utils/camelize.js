function camelize(snakeCase) {
  return snakeCase.replace(/_[a-z]/g, function(match) {
    return match[1].toUpperCase();
  });
};

camelize.keys = function(object) {
  return _(object).reduce((result, value, key) => {
    result[camelize(key)] = value;
    return result;
  }, {});
}

export default camelize;
