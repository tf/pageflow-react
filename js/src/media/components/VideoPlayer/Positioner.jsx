export default function Positioner(props) {
  return (
    <div className="videoWrapper">
      {props.children}
    </div>
  );
}

function style() {
  const {wrapperWidth, wrapperHeight} = this.state;
  const videoFile = this.props.videoFile;

  if (this.props.size == 'cover' && wrapperWidth && wrapperHeight) {
    const ratioX = wrapperWidth / videoFile.width;
    const ratioY = wrapperHeight / videoFile.height;
    const factor = Math.max(ratioX, ratioY);

    const width = videoFile.width * factor;
    const height = videoFile.height * factor;

    return {
      position: 'absolute',
      left: (wrapperWidth - width) * this.props.position[0] / 100,
      top: (wrapperHeight - height) * this.props.position[1] / 100,
      width: width,
      height: height,
    };
  }
}
