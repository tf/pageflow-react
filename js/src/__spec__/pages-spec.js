import {createReducers as createPagesReducers,
        createSaga as createPagesSaga,
        watchCollection,
        createPageType,
        connectInPage} from '../pages';
import {enhance as pageEnhance, updatePageAttribute} from '../pages/actions';
import {pageAttribute, pageState, pageIsActive, pageIsPrepared} from '../pages/selectors';

import {createMiddleware} from 'collections/createSaga';

import createStore from 'createStore';
import {combine} from 'utils';

import {combineReducers} from 'redux';
import {call} from 'redux-saga/effects';

import Backbone from 'backbone';
import jQuery from 'jquery';

import {expect} from 'support/chai';
import sinon from 'sinon';

describe('pages', () => {
  it('exports reducer, selectors and watcher for pages collection', () => {
    const pagesReducers = createPagesReducers();
    const store = createStore(combineReducers(pagesReducers));
    const pageModel = new Backbone.Model({perma_id: 5, template: 'video'});
    pageModel.configuration = new Backbone.Model({title: 'First page'});
    const pages = new Backbone.Collection([pageModel]);

    watchCollection(pages, store.dispatch);

    expect(pageAttribute('type', {id: 5})(store.getState())).to.eq('video');
    expect(pageAttribute('title', {id: 5})(store.getState())).to.eq('First page');
  });

  it('supports page type state reducers', () => {
    function pageStateReducer(state = {isPlaying: true}, action) {
      return state;
    }

    const pagesReducers = createPagesReducers({video: pageStateReducer});
    const store = createStore(combineReducers(pagesReducers));
    const pageModel = new Backbone.Model({perma_id: 5, template: 'video'});
    pageModel.configuration = new Backbone.Model();
    const pages = new Backbone.Collection([pageModel]);

    watchCollection(pages, store.dispatch);

    const result = pageState('isPlaying', {id: 5})(store.getState());

    expect(result).to.eq(true);
  });

  it('provides actions to update pages', () => {
    const pageModel = new Backbone.Model({perma_id: 5});
    pageModel.configuration = new Backbone.Model();
    const pages = new Backbone.Collection([pageModel]);
    const m = createMiddleware();
    const pagesSaga = createPagesSaga(pages, {}, m);
    const store = createStore(combineReducers(createPagesReducers()), pagesSaga, m);

    watchCollection(pages, store.dispatch);

    store.dispatch(updatePageAttribute({
      id: 5,
      name: 'title',
      value: 'Updated'
    }));

    expect(pageModel.configuration.get('title')).to.eq('Updated');
  });

  it('supports page type sagas', () => {
    const spy = sinon.spy();

    function* pageTypeSaga() {
      yield call(spy);
    }

    const pageModel = new Backbone.Model({perma_id: 5, template: 'video'});
    pageModel.configuration = new Backbone.Model();
    const pages = new Backbone.Collection([pageModel]);
    const m = createMiddleware();
    const pagesSaga = createPagesSaga(pages, {video: pageTypeSaga}, m);
    const store = createStore(combineReducers(createPagesReducers()), pagesSaga, m);

    watchCollection(pages, store.dispatch);

    store.dispatch(pageEnhance({id: 5}));

    expect(spy).to.have.been.called;
  });

  describe('createPageType', () => {
    it('creates page type that keeps page state in sync', () => {
      const pagesReducers = createPagesReducers();
      const store = createStore(combineReducers(pagesReducers));
      const pageModel = new Backbone.Model({perma_id: 5});
      pageModel.configuration = new Backbone.Model();
      const pages = new Backbone.Collection([pageModel]);
      const pageType = createPageType(() => '', store);
      const element = jQuery(document.createElement('div'));
      element.attr('id', '5');

      watchCollection(pages, store.dispatch);

      pageType.activating(element, {}, {});
      pageType.activated(element, {}, {});

      const result = pageIsActive({id: 5})(store.getState());

      expect(result).to.eq(true);
    });
  });

  describe('connectInPage', () => {
    beforeEach('given a collection of pages', function() {
      const pageModel = new Backbone.Model({perma_id: 5, template: 'video'});
      pageModel.configuration = new Backbone.Model();

      this.pages = new Backbone.Collection([pageModel]);
    });

    describe('given a store synced with the collection', () => {
      beforeEach(function() {
        this.store = createStore(combineReducers(createPagesReducers()));
        watchCollection(this.pages, this.store.dispatch);
      });

      it('allows to use selectors which refer to the surrounding page', function() {
        const Component = function(props) {
          return (<span>{props.pageIsPrepared ? 'prepared' : '-'}</span>);
        };
        const ComponentConntectedToPage = connectInPage(combine({
          pageIsPrepared: pageIsPrepared()
        }))(Component);

        const pageType = createPageType(ComponentConntectedToPage, this.store);
        const element = jQuery('<div id="5" />');

        pageType.enhance(element);
        pageType.prepare(element);

        expect(element.text()).to.eq('prepared');
      });
    });

    describe('given a store with a page state reducer for the page type', () => {
      beforeEach(function() {
        const pagesReducers = createPagesReducers({
          video: function(state = {}, action) {
            switch (action.type) {
            case 'TOGGLE':
              return {...state, toggled: !state.toggled};
            default:
              return state;
            }
          }
        });

        this.store = createStore(combineReducers(pagesReducers));
        watchCollection(this.pages, this.store.dispatch);
      });

      it('allows to dispatch page actions for the surrounding page', function() {
        const Component = class extends React.Component {
          componentDidMount() {
            this.props.onMount();
          }

          render() {
            return (<span>{this.props.toggled ? 'toggled' : '-'}</span>);
          }
        };
        const ComponentConntectedToPage = connectInPage(
          combine({
            toggled: pageState('toggled')
          }),
          dispatch => ({
            onMount: () => dispatch({type: 'TOGGLE', meta: {collectionName: 'pages'}})
          })
        )(Component);

        const pageType = createPageType(ComponentConntectedToPage, this.store);
        const element = jQuery('<div id="5" />');

        pageType.enhance(element);

        expect(element.text()).to.eq('toggled');
      });
    });
  });
});
