import createResolverRoot from './createResolverRoot.jsx';

/**
 * Prepare for usage with {pageflow.react.createWidgetType}.
 *
 * @param {Class<React.Component>} Component
 *   The component which renders the widget contents.
 *
 * @return {Class<React.Component>}
 *
 * @alias pageflow.react.createWidget
 * @since 0.1
 */
export default createResolverRoot;
