import BackgroundImage from './BackgroundImage';
import withPageStateProp from 'withPageStateProp';

function LazyBackgroundImage(props) {
  return (
    <BackgroundImage {...props} loaded={!props.pageState || props.pageState.isPreloaded} />
  );
}

export default withPageStateProp(LazyBackgroundImage);
