import PageForeground from './page_foreground.jsx';
import PageScroller from './page_scroller.jsx';

export default function(props) {
  return (
    <PageForeground>
      <PageScroller>
        {props.children}
      </PageScroller>
    </PageForeground>
  );
}
