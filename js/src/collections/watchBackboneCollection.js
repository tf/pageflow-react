import {reset, add, change, remove} from './actions';

import camelize from 'utils/camelize';

export default function({collection, dispatch, collectionName, attributes = ['id'], includeConfiguration = false}) {
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
    const result = camelize.deep(attributes.reduce((result, attribute) => {
      if (typeof attribute == 'object') {
        const key = Object.keys(attribute)[0];
        const value = attribute[key];

        result[key] = model.get(value);
      }
      else {
        result[attribute] = model.get(attribute);
      }
      return result;
    }, {}));

    if (includeConfiguration) {
      return {...result, ...model.configuration.attributes};
    }

    return result;
  }

  function changeEvents() {
    return includeConfiguration ? 'change change:configuration' : 'change';
  }
}
