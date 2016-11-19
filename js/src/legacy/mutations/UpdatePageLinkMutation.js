import Mutation from './Mutation';

import pageflow from 'pageflow';

export default class extends Mutation {
  perform(options) {
    this._getPageLink(options.id).set(options.attributes);
  }

  _getPageLink(pageLinkId) {
    var pageLink = this._getPage(pageLinkId).pageLinks().get(pageLinkId);

    if (!pageLink) {
      throw new Error(`Could not find page link with id ${pageLinkId}.`);
    }

    return pageLink;
  }

  _getPage(pageLinkId) {
    var [pageId] = pageLinkId.split(':');
    var page = pageflow.pages.getByPermaId(pageId);

    if (!page) {
      throw new Error(`Could not find page with id ${pageId}.`);
    }

    return page;
  }
}
