import InfoBox from './InfoBox';

export default function(props) {
  return (
    <div className="controls">
      <span className="hint">{props.hint}</span>

      <InfoBox {...props.infoBox} />

      <div className="vjs-control-bar">
        <div className="play_button">
          <a className="vjs-play-control"
             tabindex="4"
             title={props.playButtonTitle}
             onClick={onPlayButtonClick}>
            <span></span>
          </a>
        </div>
        <div className="control_bar_text">
          {props.controlBarText}
        </div>
      </div>
    </div>
  );
};

function onPlayButtonClick() {
  
}
