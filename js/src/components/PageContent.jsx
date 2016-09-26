import PageForeground from './PageForeground';
import PageScroller from './PageScroller';

export default function(props) {
  return (
    <PageForeground>
      <PageScroller>
        {props.children}
      </PageScroller>
    </PageForeground>
  );
}
