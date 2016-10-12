/**
 * Create a widget type from the given component.
 *
 * @param {Class<React.Component>} Component
 *   The component which renders the widget contents.
 *
 * @return {Class<pageflow.WidgetType>}
 *
 * @alias pageflow.react.createWidgetType
 * @since 0.1
 */
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
