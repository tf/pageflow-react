export const registry = [];

export default function(name, {Component, reducer, saga}) {
  registry.push({
    name,
    Component,
    reducer,
    saga
  });
}
