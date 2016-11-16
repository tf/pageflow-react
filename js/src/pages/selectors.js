import {selector} from 'pages';

export function pageAttribute(property, options) {
  return selector({map: page => { console.log(page.attributes); return page.attributes[property]; }, ...options});
}

export function pageState(property, options) {
  return selector({map: page => page.state.custom[property], ...options});
}
