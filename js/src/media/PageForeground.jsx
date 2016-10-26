import PageForeground from 'components/PageForeground';
import withPlayerStateProp from './withPlayerStateProp';

function PageForegroundWithInteractionReporting(props) {
  const {actions} = props.playerState;

  return (
    <PageForeground onInteraction={actions.userInteraction}>
      {props.children}
    </PageForeground>
  );
}

export default withPlayerStateProp(PageForegroundWithInteractionReporting);
