import classNames from 'classnames';

import withPlayerStateProp from './withPlayerStateProp';

function Container(props) {
  const {actions} = props.playerState;

  return (
    <div className={className(props)}
         data-role="player_controls"
         onMouseEnter={actions.enterControls}
         onMouseLeave={actions.leaveControls}>
      {props.children}
    </div>
  );
}

function className(props) {
  console.log(props.playerState.userHasBeenIdle);

  return classNames('controls', {
    'has_been_faded': props.playerState.userHasBeenIdle
  });
}

export default withPlayerStateProp(Container);
