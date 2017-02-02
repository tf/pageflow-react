export default function(Component) {
  return {
    enhance: function(element) {
      ReactDOM.render(React.createElement(Component, {
        widgetRole: element.data('widgetRole'),
        resolverSeed: {
          events: pageflow.events,
          ...pageflow.seed
        }
      }), element[0]);
    }
  };
};