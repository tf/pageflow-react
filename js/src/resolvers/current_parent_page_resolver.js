import Resolver from './resolver';
import resolve from '../resolve';

import createRecursiveResolver from './create_recursive_resolver';

class CurrentPageResolver extends Resolver {
  constructor(options, callback) {
    super(callback);

    this._subscribeToPageChange();
    this._pageResolver = resolve('page', {property: 'permaId'})(callback);
  }

  get(_, seed) {
    return this._pageResolver.get({
      permaId: this._currentParentPagePermaId(seed)
    }, seed);
  }

  _currentParentPagePermaId(seed) {
    var currentPagePermaId = pageflow.slides.currentPage().page('getPermaId');
    return pageflow.entryData.getParentPagePermaIdByPagePermaId(currentPagePermaId);
  }

  _subscribeToPageChange() {
    pageflow.events.on('page:change', this._handleChange, this);
  }
};

export default createRecursiveResolver(CurrentPageResolver);