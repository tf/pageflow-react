import watchBackboneCollection from '../watchBackboneCollection';
import {RESET, CHANGE} from '../actions';

import Backbone from 'backbone';

import {expect} from 'support/chai';
import sinon from 'sinon';

describe('watchBackboneCollection', () => {
  it('dispatches reset action initially', () => {
    const postAttributes = {title: 'News'};
    const collection = new Backbone.Collection([postAttributes]);
    const dispatch = sinon.spy();

    watchBackboneCollection({
      collectionName: 'posts',
      collection,
      dispatch,
      attributes: ['title']
    });

    expect(dispatch).to.have.been.calledWith(sinon.match({
      type: RESET,
      payload: {
        collectionName: 'posts',
        items: [postAttributes]
      }
    }));
  });

  it('camelized attribute', () => {
    const postAttributes = {long_title: 'News'};
    const collection = new Backbone.Collection([postAttributes]);
    const dispatch = sinon.spy();

    watchBackboneCollection({
      collectionName: 'posts',
      collection,
      dispatch,
      attributes: ['long_title']
    });

    expect(dispatch).to.have.been.calledWith(sinon.match({
      type: RESET,
      payload: {
        items: [{longTitle: 'News'}]
      }
    }));
  });

  it('supports mapping attribute names', () => {
    const postAttributes = {post_type: 'gallery'};
    const collection = new Backbone.Collection([postAttributes]);
    const dispatch = sinon.spy();

    watchBackboneCollection({
      collectionName: 'posts',
      collection,
      dispatch,
      attributes: [{type: 'post_type'}]
    });

    expect(dispatch).to.have.been.calledWith(sinon.match({
      type: RESET,
      payload: {
        items: [{type: 'gallery'}]
      }
    }));
  });

  it('supports including configuration attributes', () => {
    const model = new Backbone.Model();
    model.configuration = new Backbone.Model({some: 'setting'});
    const collection = new Backbone.Collection([model]);
    const dispatch = sinon.spy();

    watchBackboneCollection({
      collectionName: 'posts',
      collection,
      dispatch,
      attributes: [],
      includeConfiguration: true
    });

    expect(dispatch).to.have.been.calledWith(sinon.match({
      type: RESET,
      payload: {
        items: [{some: 'setting'}]
      }
    }));
  });

  it('dispatches change action when mapped attribute changes', () => {
    const model = new Backbone.Model();
    const collection = new Backbone.Collection([model]);
    const dispatch = sinon.spy();

    watchBackboneCollection({
      collectionName: 'posts',
      collection,
      dispatch,
      attributes: ['title']
    });

    model.set('title', 'changed');

    expect(dispatch).to.have.been.calledWith(sinon.match({
      type: CHANGE,
      payload: {
        attributes: {title: 'changed'}
      }
    }));
  });

  it('dispatches change action on change:confguration event when configuration is included ', () => {
    const model = new Backbone.Model();
    model.configuration = new Backbone.Model({some: 'setting'});
    const collection = new Backbone.Collection([model]);
    const dispatch = sinon.spy();

    watchBackboneCollection({
      collectionName: 'posts',
      collection,
      dispatch,
      attributes: [],
      includeConfiguration: true
    });

    model.configuration.set('some', 'changed');
    model.trigger('change:configuration', model);

    expect(dispatch).to.have.been.calledWith(sinon.match({
      type: CHANGE,
      payload: {
        attributes: {some: 'changed'}
      }
    }));
  });
});
