import createContainer from '../../create_container.jsx';
import createWidget from '../../create_widget.jsx';
import resolve from '../../resolve';

import PageThumbnail from '../page_thumbnail.jsx';

import classNames from 'classnames';

function ParentPageBox(props) {
  return (
    <div className="parent_page_box">
      <a className={classNames('parent_page_box-link',
                               props.parentPage && 'is_visible')}
         href={`#${props.parentPage ? props.parentPage.permaId : ''}`}
         onClick={handleClick} />

      {renderOverlay(props.parentPage)}
    </div>
  )
}

function renderOverlay(page) {
  if (page) {
    return (
      <div className="parent_page_box-overlay">
        Zurück zu Kapitel
        <div className="parent_page_box-chapter_title">
          {page.chapter.title}
        </div>
        <hr className="parent_page_box-separator" />
        <span className="parent_page_box-page_title">
          {page.title}
        </span>
        <PageThumbnail className="parent_page_box-thumbnail" page={page} />
      </div>
    );
  }
  else {
    return null;
  }
}

function handleClick(event) {
  pageflow.slides.goToParentPage();
  event.preventDefault();
}

export default createWidget(createContainer(ParentPageBox, {
  fragments: {
    parentPage: resolve('currentParentPage', {
      fragments: {
        chapter: resolve('chapter')
      }
    })
  }
}));
