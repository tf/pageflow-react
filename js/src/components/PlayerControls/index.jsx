import React from 'react';

import InfoBox from '../InfoBox';
import QualityMenu from './QualityMenu';

function PlayerControls(props) {
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
        <QualityMenu buttonTitle={props.qualityMenuButtonTitle}
                     items={props.qualityMenuItems}
                     onItemClick={props.onQualityMenuItemClick} />
      </div>
    </div>
  );
}

PlayerControls.propTypes = {
  hint: React.PropTypes.string,

  controlBarText: React.PropTypes.string,

  playButtonTitle: React.PropTypes.string,

  infoBox: React.PropTypes.object,

  qualityMenuButtonTitle: React.PropTypes.string,

  qualityMenuItems: QualityMenu.propTypes.items,

  onPlayButtonClick: React.PropTypes.func,

  onQualityMenuItemClick: React.PropTypes.func,
};

export default PlayerControls;
