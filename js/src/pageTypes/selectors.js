export function pageType({page}) {
  return function(state, props) {
    const _page = typeof page == 'function' ?
                         page(props) :
                         page;

    return _page ? state.pageTypes[_page.type] : null;
  };
}
