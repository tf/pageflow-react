import {createItemSelector} from 'collections';

export const selector = createItemSelector('pages');

export function pageAttribute(property, options) {
  return selector({map: page => page.attributes[property], ...options});
}

export function pageAttributes(options) {
  return selector({map: page => page.attributes, ...options});
}

export function pageState(property, options) {
  return selector({map: page => page.state.custom[property], ...options});
}

export function pageIsActive(options) {
  return commonPageState('isActive', options);
}

export function pageIsPreloaded(options) {
  return commonPageState('isPreloaded', options);
}

export function pageIsPrepared(options) {
  return commonPageState('isPrepared', options);
}

function commonPageState(property, options) {
  return selector({map: page => page.state.common[property], ...options});
}
