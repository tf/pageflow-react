export default function(fileType, getId) {
  return function(state, props) {
    const id = getId(props);

    state[fileType].find(file =>
      file.id == id
    );
  };
}
