import {
  createReducer as createCollectionReducer,
  watch
} from 'collections';

export const reducers = {storylines: createCollectionReducer('storylines')};

export function watchCollection(storylines, dispatch) {
  watch({
    collection: storylines,
    collectionName: 'storylines',
    dispatch,

    attributes: ['id'],
    includeConfiguration: true
  });
}
