import PageThumbnail from './PageThumbnail';
import withPageStateProp from 'withPageStateProp';

function LazyLoadedPageThumbnail(props) {
  return (
    <PageThumbnail {...props} lazy={true} loaded={props.pageState.isPreloaded} />
  );
}

export default withPageStateProp(LazyLoadedPageThumbnail);
