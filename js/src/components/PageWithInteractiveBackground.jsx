import React from 'react';

import PageWrapper from './PageWrapper';
import PageBackground from './PageBackground';
import PageShadow from './PageShadow';
import PageContent from './PageContent';
import PageScroller from './PageScroller';
import PageHeader from './PageHeader';
import PageText from './PageText';
import PlayerControls from './PlayerControls';
import CloseButton from './CloseButton';

import createPageComponent from '../createPageComponent';

/**
 *
 */
class PageWithInteractiveBackground extends React.Compont {
  constructor(props, context) {
    super(props, context);

    this.state = {
      didPlay: true
    };
  }

  render(props) {
    return (
      <PageWrapper className={classNames({unplayed: !this.state.didPlay})}>
        <CloseButton onClick={pageflow.hideText.deactivate} />

        <PageBackground>
          {props.children}
          <PageShadow page={props.page} />
        </PageBackground>

        <PageContent hideWithText={true}>
          <PlayerControls page={props.page} onPlayButtonClick={pageflow.hideText.activate} />
          <PageScroller>
            <PageHeader page={props.page} />
            <PageText page={props.page} />
          </PageScroller>
        </PageContent>
      </PageWrapper>
    );
  }

  pageDidActivate() {
    pageflow.hideText.on('activate', this.setDidPlay);
    pageflow.hideText.on('deactivate', this.context.scrollIndicator.enable);
  }

  pageWillDeactivate() {
    pageflow.hideText.off('activate', this.setDidPlay);
    pageflow.hideText.off('deactivate', this.context.scrollIndicator.enable);
  }

  setDidPlay() {
    this.setState({didPlay: true});
  }
}

PageWithInteractiveBackground.propTypes = {
  page: React.PropTypes.Object;
};

PageWithInteractiveBackground.contextTypes = {
  scrollIndicator: React.PropTypes.object
};

export default createPageComponent(PageWithInteractiveBackground);
