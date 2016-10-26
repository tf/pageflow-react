import withPlayerStateProp from './withPlayerStateProp';

import classNames from 'classnames';

export default function(Component) {
  class Wrapper extends React.Component {
    render() {
      return (
        <Component {...this.props} className={this.playerStateClassNames()} />
      );
    }

    playerStateClassNames() {
      return classNames(this.props.className, {
        'is_playing': this.props.playerState.isPlaying,
        'is_playing_delayed': this.props.playerState.hasBeenPlayingJustNow,
        'is_paused': !this.props.playerState.isPlaying,
      });
    }
  }

  return withPlayerStateProp(Wrapper);
}
