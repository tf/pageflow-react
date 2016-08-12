import React from 'react';
import classNames from 'classnames';

import PageWrapper from './page_wrapper.jsx';
import PageBackground from './page_background.jsx';
import PageShadow from './page_shadow.jsx';
import PageForeground from './page_foreground.jsx';
import PageScroller from './page_scroller.jsx';
import PageHeader from './page_header.jsx';
import PageText from './page_text.jsx';
import PlayerControls from './PlayerControls';
import CloseButton from './CloseButton.jsx';
import MenuBar from './PlayerControls/MenuBar';

import withPageLifecycle from '../withPageLifecycle.jsx';

/**
 *
 */
class PageWithInteractiveBackground extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      didPlay: false,
      menuBarHiddenOnPhone: false
    };

    this.onHideTextActivate = () => {
      this.setState({
        didPlay: true,
        menuBarHiddenOnPhone: false
      });
    };

    this.onHideTextDeactivate = () => {
      this.context.scrollIndicator.enable();
      this.setState({menuBarHiddenOnPhone: true});
    };

    this.onPlayButtonClick = () => {
      pageflow.hideText.activate();

      if (this.props.onEnterBackground) {
        this.props.onEnterBackground();
      }
    };

    this.onCloseButtonClick = () => {
      pageflow.hideText.deactivate();

      if (this.props.onLeaveBackground) {
        this.props.onLeaveBackground();
      }
    };
  }

  render() {
    const page = this.props.page;

    return (
      <PageWrapper className={classNames({unplayed: !this.state.didPlay}, 'hide_content_with_text')}>
        <CloseButton onClick={this.onCloseButtonClick} />
        <MenuBar additionalButtons={this.props.additionalMenuBarButtons}
                 onAdditionalButtonClick={this.props.onAdditionalButtonClick}
                 qualityMenuButtonTitle={this.props.qualityMenuButtonTitle}
                 qualityMenuItems={this.props.qualityMenuItems}
                 onQualityMenuItemClick={this.props.onQualityMenuItemClick}
                 hiddenOnPhone={this.state.menuBarHiddenOnPhone} />

        <PageBackground>
          <div className="videoWrapper">
            {this.props.children}
          </div>
          <PageShadow page={page} />
        </PageBackground>

        <PageForeground>
          <PlayerControls playButtonTitle="Starten"
                          playButtonIconName={this.props.playButtonIconName}
                          controlBarText={page.controlBarText || this.props.defaultControlBarText}
                          onPlayButtonClick={this.onPlayButtonClick}
                          infoBox={{title: page.additionalTitle, description: page.additionalDescription}} />

          <PageScroller>
            <PageHeader page={page} />
            <PageText page={page} />
          </PageScroller>
        </PageForeground>
      </PageWrapper>
    );
  }

  pageWillActivate() {
    this.setState({didPlay: false, menuBarHiddenOnPhone: false});
  }

  pageDidActivate() {
    pageflow.hideText.on('activate', this.onHideTextActivate);
    pageflow.hideText.on('deactivate', this.onHideTextDeactivate);
  }

  pageWillDeactivate() {
    pageflow.hideText.off('activate', this.onHideTextActivate);
    pageflow.hideText.off('deactivate', this.onHideTextDeactivate);
  }
}

PageWithInteractiveBackground.propTypes = {
  page: React.PropTypes.object,

  defaultControlBarText: React.PropTypes.string,
  playButtonIconName: React.PropTypes.string,

  onEnterBackground: React.PropTypes.func,
  onLeaveBackground: React.PropTypes.func,

  additionalMenuBarButtons: React.PropTypes.array,
  onAdditionalButtonClick: React.PropTypes.func,

  qualityMenuItems: React.PropTypes.array,
  onQualityMenuItemClick: React.PropTypes.func
};

PageWithInteractiveBackground.contextTypes = {
  scrollIndicator: React.PropTypes.object
};

export default withPageLifecycle(PageWithInteractiveBackground);
