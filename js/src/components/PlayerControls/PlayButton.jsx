import classNames from 'classnames';
import Icon from 'components/Icon';

export default function(props) {
  return (
    <a className={className(props)}
       href="#"
       tabIndex="4"
       title={props.title}
       onClick={props.onClick}>
      {icon(props)}
    </a>
  );
}

function className(props) {
  return classNames('vjs-play-control',
                    {'vjs-playing': props.isPlaying},
                    {'player_controls-play_button-custom_icon': !!props.iconName});
}

function icon(props) {
  if (props.iconName) {
    return (
      <Icon name={props.iconName} />
    );
  }
  else {
    return (
      <span />
    );
  }
}
