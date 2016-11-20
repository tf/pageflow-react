import {
  createReducer as createCollectionReducer,
  watch
} from 'collections';

export const reducers = {chapters: createCollectionReducer('chapters')};

export function watchCollection(chapters, dispatch) {
  watch({
    collection: chapters,
    collectionName: 'chapters',
    dispatch,

    attributes: ['id', 'title', 'position', 'storyline_id']
  });
}
