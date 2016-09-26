import React from 'react';

/**
 * Creates a new component that triggers lifecycle hooks on the
 * wrapped component when used inside a page. The following methods
 * can be defined by the wrapped component:
 *
 * - `pageWillActivate`: Called before the transition to the enclosing
 * page starts when entering the page.
 *
 * - `pageDidActivate`: Called after the transitions to the enclosing
 * page finished when entering the page.
 *
 * - `pageWillDeactivate`: Called before the transitions from the enclosing
 * page starts when leaving the page.
 *
 * - `pageDidDeactivate`: Called after the transitions from the enclosing
 * page finished when leaving the page.
 *
 * - `pageDidResize`: Called when the viewport size changed.
 *
 * - `pageDidPrepare`: Called when the page should be prepared for
 * display, for example when the user enters the preceeding page or a
 * page that links to the page.
 *
 * `pageDidUnprepare`: Called when the page should no longer be
 * prepared because the user moved to a different page without
 * actually entering the page.
 *
 * @example
 *
 * const {withPageLifecycle} = pageflow.react;
 *
 * class VideoPlayer extends React.Component {
 *   render() {
 *     ...
 *   }
 *
 *   componentDidMount() {
 *     // Create player object
 *     this.player = ...
 *   }
 *
 *   pageWillActivate() {
 *     // Start player when entering the page
 *     this.player.player()
 *   }
 *
 *   pageWillActivate() {
 *     // Pause player when leaving the page
 *     this.player.pause()
 *   }
 * }
 *
 * pageflow.my.VideoPlayer = withPageLifecycle(VideoPlayer);
 */
export default function withPageLifecycle(Component) {
  class Wrapper extends React.Component {
    componentDidMount() {
      var component = this.refs.component;

      this.context.pageHooks.on({
        prepare: () => {
          trigger('pageDidPrepare');
        },

        unprepare: () => {
          trigger('pageDidUnprepare');
        },

        activating: (options) => {
          trigger('pageWillActivate', options);
        },

        activated: () => {
          trigger('pageDidActivate');
        },

        deactivating: () => {
          trigger('pageWillDeactivate');
        },

        deactivated: () => {
          trigger('pageDidDeactivate');
        },

        resize: () => {
          trigger('pageDidResize');
        },
      }, this);

      function trigger(name, options) {
        if (typeof component[name] === 'function') {
          component[name].call(component, options);
        }
      }
    }

    componentWillUnmount() {
      this.context.pageHooks.off(null, null, this);
    }

    render() {
      return (<Component {...this.props} ref="component" />);
    }
  }

  Wrapper.contextTypes = {
    pageHooks: React.PropTypes.object
  };

  return Wrapper;
}

withPageLifecycle.hookMapping = {
  prepare: 'pageDidPrepare',
  unprepare: 'pageDidUnprepare',
  activating: 'pageWillActivate',
  activated: 'pageDidActivate',
  deactivating: 'pageWillDeactivate',
  deactivated: 'pageDidDeactivate',
  resize: 'pageDidResize'
};
