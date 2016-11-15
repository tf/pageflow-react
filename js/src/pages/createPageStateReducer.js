import commonPageStateReducer from './commonPageStateReducer';

export default function(pageStateReducers) {
  return function(page, action) {
    const pageStateReducer = pageStateReducers[page.type] || (item => item);

    const newPageState = commonPageStateReducer(
      pageStateReducer(page.state, action),
      action
    );

    if (page.state !== newPageState) {
      return {...page, state: newPageState};
    }

    return page;
  };
}
