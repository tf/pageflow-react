import InfoBox from './InfoBox.jsx';

export default function(props) {
  return (
    <div className="controls" data-role="player_controls">
      <span className="hint">{props.hint}</span>

      <InfoBox {...props.infoBox} />

      <div className="vjs-control-bar">
        <div className="play_button">
          <a className="vjs-play-control"
             href="#"
             tabIndex="4"
             title={props.playButtonTitle}
             onClick={props.onPlayButtonClick}>
            <span></span>
          </a>
        </div>
        <div className="control_bar_text">
          {props.controlBarText}
        </div>
      </div>
    </div>
  );
}
