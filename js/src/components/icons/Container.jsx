function Container(props) {
  return (
    <svg className={props.className}
         version="1.1" xmlns="http://www.w3.org/2000/svg"
         width={props.width} height={props.height}
         viewBox={`${props.viewBoxLeft} ${props.viewBoxTop} ${props.viewBoxWidth} ${props.viewBoxHeight}`}>
      {props.children}
    </svg>
  );
}

Container.defaultProps = {
  width: 20,
  height: 20,
  viewBoxLeft: 0,
  viewBoxTop: 0
};

export default Container;
