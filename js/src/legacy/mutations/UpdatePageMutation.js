import Mutation from './Mutation';

import pageflow from 'pageflow';

export default class extends Mutation {
  perform(options) {
    this._getPage(options.pageId).configuration.set(options.attributes);
  }

  _getPage(pageId) {
    var page = pageflow.pages.get(pageId);

    if (!page) {
      throw new Error(`Could not find page with id ${pageId}.`);
    }

    return page;
  }
}
