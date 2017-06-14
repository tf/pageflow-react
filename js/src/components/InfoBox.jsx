import classNames from 'classnames';

export default function(props) {
  return (
    <div className={wrapperClassNames(props)}>
      {header(props)}
      <p dangerouslySetInnerHTML={{__html: props.description}} />
    </div>
  );

  function wrapperClassNames(props) {
    return classNames('add_info_box', {
      'empty': !props.title && !props.description,
      'title_empty': !props.title,
      'description_empty': !props.description
    });
  }

  function header(props) {
    if (props.title) {
      return (
        <h3>{props.title}</h3>
      );
    }
  }
}
