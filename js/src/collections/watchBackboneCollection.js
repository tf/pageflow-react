import {reset, add, change, remove} from './actions';

import pickAttributes from './pickAttributes';

export default function({
  collection, dispatch, collectionName,
  attributes = ['id'],
  includeConfiguration = false
}) {
  dispatch(reset({
    collectionName,
    items: collection.map(modelToAttributes)
  }));

  collection.on('add', (model) => {
    dispatch(add({
      collectionName,
      attributes: modelToAttributes(model)
    }));
  });

  collection.on(changeEvents(), (model) => {
    dispatch(change({
      collectionName,
      attributes: modelToAttributes(model)
    }));
  });

  collection.on('remove', (model) => {
    dispatch(remove({
      collectionName,
      id: model.id
    }));
  });

  function modelToAttributes(model) {
    return pickAttributes(attributes,
                          model.attributes,
                          includeConfiguration && model.configuration.attributes);
  }

  function changeEvents() {
    return includeConfiguration ? 'change change:configuration' : 'change';
  }
}
