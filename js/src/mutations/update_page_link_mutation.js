import Mutation from './mutation';

import pageflow from 'pageflow';

export default class extends Mutation {
  perform() {
    this._getPageLink().set(this.props.attributes);
  }

  _getPageLink() {
    var pageLink = this._getPage().pageLinks().get(this.props.id);

    if (!pageLink) {
      throw new Error(`Could not find page link with id ${this.props.pageLinkId}.`);
    }

    return pageLink;
  }

  _getPage() {
    var [pageId] = this.props.id.split(':');
    var page = pageflow.pages.get(pageId);

    if (!page) {
      throw new Error(`Could not find page with id ${pageId}.`);
    }

    return page;
  }
}
