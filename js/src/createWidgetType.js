export default function(Component) {
  return {
    enhance: function(element) {
      ReactDOM.render(React.createElement(Component, {
        resolverSeed: {
          events: pageflow.events,
          ...pageflow.seed
        }
      }), element[0]);
    }
  };
};