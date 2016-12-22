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
    if (!model.isNew()) {
      dispatch(add({
        collectionName,
        attributes: modelToAttributes(model)
      }));
    }
  });

  collection.on('change:id', (model) => {
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
    setTimeout(() => {
      dispatch(remove({
        collectionName,
        attributes: modelToAttributes(model)
      }));
    }, 0);
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
