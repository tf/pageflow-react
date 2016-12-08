import classNames from 'classnames';

import QualityMenu from './QualityMenu';
import TextTracksMenu from './TextTracksMenu';
import MenuBarButton from './MenuBarButton';

export default function MenuBar(props) {
  return (
    <div className={className(props)}>
      {renderAdditionalButtons(props)}

      <QualityMenu buttonTitle={props.qualityMenuButtonTitle}
                   items={props.qualityMenuItems}
                   onItemClick={props.onQualityMenuItemClick} />

      <TextTracksMenu buttonTitle={props.textTracksMenuButtonTitle}
                      items={props.textTracksMenuItems}
                      onItemClick={props.onTextTracksMenuItemClick} />
    </div>
  );
}

MenuBar.propTypes = {
  additionalButtons: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      label: React.PropTypes.string.isRequired
    })
  ),
  hiddenOnPhone: React.PropTypes.bool,
  onAdditionalButtonClick: React.PropTypes.func,
  qualityMenuButtonTitle: React.PropTypes.string,
  qualityMenuItems: QualityMenu.propTypes.items,
  onQualityMenuItemClick: React.PropTypes.func,

  textTracksMenuButtonTitle: React.PropTypes.string,
  textTracksMenuItems: TextTracksMenu.propTypes.items,
  onTextTracksMenuItemClick: React.PropTypes.func
};

MenuBar.defaultProps = {
  additionalButtons: []
};

function className(props) {
  return classNames('player_controls-menu_bar',
                    {'player_controls-menu_bar-hidden_on_phone': props.hiddenOnPhone},
                    props.className);
}

function renderAdditionalButtons(props) {
  return props.additionalButtons.map(additionalButton => {
    return (
      <MenuBarButton title={additionalButton.label}
                     iconName={additionalButton.iconName}
                     key={additionalButton.name}
                     onClick={additionalButtonClickHandler(props, additionalButton.name)} />
    );
  });
}

function additionalButtonClickHandler(props, name) {
  if (props.onAdditionalButtonClick) {
    return () => props.onAdditionalButtonClick(name);
  }
}
