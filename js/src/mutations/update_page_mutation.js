import Mutation from './mutation';

import pageflow from 'pageflow';

export default class extends Mutation {
  perform() {
    this._getPage().configuration.set(this.props.attributes);
  }

  _getPage() {
    var page = pageflow.pages.get(this.props.pageId);

    if (!page) {
      throw new Error(`Could not find page with id ${this.props.pageId}.`);
    }

    return page;
  }
}
