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
    const watchedAttributes = attributes.map(attribute =>
      typeof attribute == 'object' ? mappedAttributeSource(attribute) : attribute
    );

    const attributeChangeEvents = watchedAttributes.map(attribute =>
      `change:${attribute}`
    );

    if (includeConfiguration) {
      attributeChangeEvents.push('change:configuration');
    }

    return attributeChangeEvents.join(' ');
  }

  function mappedAttributeSource(attribute) {
    return attribute[Object.keys(attribute)[0]];
  }
}
