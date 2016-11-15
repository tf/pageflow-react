import createCollectionReducer from 'collections/createReducer';

export default createCollectionReducer('pages', {
  idAttribute: 'permaId',

  itemReducer: function(page, action) {
    const pageStateReducer = pageStateReducers[page.type];

    if (pageStateReducer) {
      const newPageState = pageStateReducer(page.state, action);

      if (page.state !== newPageState) {
        return {...page, state: newPageState};
      }
    }

    return page;
  }
});

export const pageStateReducers = {};
