import classNames from 'classnames';

import Icon from '../Icon.jsx';

export default function MenuBarButton(props) {
  return (
    <div className={className(props)}>
      <a className={className(props, 'link')}
         href="#"
         tabIndex="4"
         title={props.title}
         onClick={props.onClick}>
        <Icon className={className(props, 'icon')}
              name={props.iconName} />
      </a>
      {renderSubMenu(props)}
    </div>
  );
}

MenuBarButton.propTypes = {
  title: React.PropTypes.string,
  iconName: React.PropTypes.string,
  subMenuItems: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      label: React.PropTypes.node.isRequired,
      value: React.PropTypes.string.isRequired,
      annotation: React.PropTypes.string,
      active: React.PropTypes.bool,
    })
  ),
  onClick: React.PropTypes.func,
  onSubMenuItemClick: React.PropTypes.func
};

MenuBarButton.defaultProps = {
  subMenuItems: []
};

function renderSubMenu(props) {
  if (props.subMenuItems.length > 0) {
    return (
      <ul className="player_controls-menu_bar_button_sub_menu">
        {renderSubMenuItems(props)}
      </ul>
    );
  }
}

function renderSubMenuItems(props) {
  return props.subMenuItems.map(item => {
    return (
      <li className={itemClassName(item)} key={item.value}>
        <a className="player_controls-menu_bar_button_sub_menu_item_link"
           href="#"
           onClick={subMenuItemClickHandler(props, item.value)} >

          {renderSubMenuItemIcon(item)}
          {item.label}
          {renderSubMenuItemAnnotation(props, item)}
        </a>
      </li>
    );
  });
}

function itemClassName(item) {
  return classNames(
    'player_controls-menu_bar_button_sub_menu_item',
    {'player_controls-menu_bar_button_sub_menu_item-active': item.active}
  );
}

function renderSubMenuItemIcon(item) {
  if (item.active) {
    return (
      <Icon className="player_controls-menu_bar_button_sub_menu_item_icon"
            name="activeMenuItem" />
    );
  }
}

function renderSubMenuItemAnnotation(props, item) {
  if (item.annotation) {
    return (
      <span className={className(props, 'sub_menu_item_annotation')}>
        {item.annotation}
      </span>
    );
  }
}

function subMenuItemClickHandler(props, value) {
  if (props.onSubMenuItemClick) {
    return () => props.onSubMenuItemClick(value);
  }
}

function className(props, ...suffix) {
  return classNames(['player_controls-menu_bar_button', ...suffix].join('_'),
                    [props.className, ...suffix].join('_'));
}
