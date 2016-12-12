export function prop(path) {
  return function(state, props) {
    const names = path.split('.');

    if (!(names[0] in props)) {
      throw new Error(`Missing required prop ${names[0]}.`);
    }

    return names.reduce((p, name) => (p && p[name]), props);
  };
}

export function map(selector, fn) {
  return function(state, props) {
    const result = selector(state, props);
    return fn(result);
  };
}
