export const registry = [];

export default function(name, {component, reducer, saga}) {
  registry.push({
    name,
    component,
    reducer,
    saga
  });
}
