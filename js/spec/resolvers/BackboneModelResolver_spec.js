import BackboneModelResolver from 'resolvers/BackboneModelResolver';

import Backbone from 'backbone';

import sinon from 'sinon';

describe('BackboneModelResolver', () => {
  it('gets props from model attributes referenced by id', () => {
    var collection = new Backbone.Collection([{id: 1, title: 'Some title'}]);
    var modelResolver = new BackboneModelResolver({
      collection: () => collection,
      attributesForProps: ['id', 'title'],
      property: 'modelId'
    });

    var result = modelResolver.get({modelId: 1});

    expect(result).to.deep.eq({id: 1, title: 'Some title'})
  });

  it('can map attribute names', () => {
    var collection = new Backbone.Collection([{id: 1, template: 'background_image'}]);
    var modelResolver = new BackboneModelResolver({
      collection: () => collection,
      attributesForProps: ['id', ['type', 'template']],
      property: 'modelId'
    });

    var result = modelResolver.get({modelId: 1});

    expect(result).to.deep.eq({id: 1, type: 'background_image'})
  });

  it('camelizes attribute names', () => {
    var collection = new Backbone.Collection([{id: 1, image_id: 2}]);
    var modelResolver = new BackboneModelResolver({
      collection: () => collection,
      attributesForProps: ['id', 'image_id'],
      property: 'modelId'
    });

    var result = modelResolver.get({modelId: 1});

    expect(result).to.deep.eq({id: 1, imageId: 2})
  });

  it('resolves to null if property is missing', () => {
    var collection = new Backbone.Collection();
    var modelResolver = new BackboneModelResolver({
      collection: () => collection,
      property: 'modelId'
    });

    var result = modelResolver.get({});

    expect(result).to.deep.eq(null)
  });

  it('resolves to null if model cannot be found', () => {
    var collection = new Backbone.Collection();
    var modelResolver = new BackboneModelResolver({
      collection: () => collection,
      property: 'modelId'
    });

    var result = modelResolver.get({modelId: 1000});

    expect(result).to.deep.eq(null)
  });

  it('can use custom id attribute', () => {
    var collection = new Backbone.Collection([{id: 1, permaId: 100, title: 'Some title'}]);
    var modelResolver = new BackboneModelResolver({
      collection: () => collection,
      idAttribute: 'permaId',
      attributesForProps: ['id', 'title'],
      property: 'modelPermaId'
    });

    var result = modelResolver.get({modelPermaId: 100});

    expect(result).to.deep.eq({id: 1, title: 'Some title'})
  });

  it('gets props from new model after property value changes', () => {
    var collection = new Backbone.Collection([
      {id: 1, title: 'Some title'},
      {id: 2, title: 'Some other title'}
    ]);
    var modelResolver = new BackboneModelResolver({
      collection: () => collection,
      attributesForProps: ['id', 'title'],
      property: 'modelId'
    });

    modelResolver.get({modelId: 1});
    var result = modelResolver.get({modelId: 2});

    expect(result).to.deep.eq({id: 2, title: 'Some other title'})
  });

  it('invokes callback when prop attribute changes', () => {
    var collection = new Backbone.Collection([{id: 1, title: 'Some title'}]);
    var callback = sinon.spy();
    var modelResolver = new BackboneModelResolver({
      collection: () => collection,
      attributesForProps: ['id', 'title'],
      property: 'modelId'
    }, callback);

    modelResolver.get({modelId: 1});
    collection.first().set('title', 'Changed title');

    expect(callback).to.have.been.called;
  });

  it('does not invoke callback when other attributes changes', () => {
    var collection = new Backbone.Collection([{id: 1, title: 'Some title'}]);
    var callback = sinon.spy();
    var modelResolver = new BackboneModelResolver({
      collection: () => collection,
      attributesForProps: ['id', 'title'],
      property: 'modelId'
    }, callback);

    modelResolver.get({modelId: 1});
    collection.first().set('text', 'Changed text');

    expect(callback).not.to.have.been.called;
  });

  it('starts listening to new model on prop change', () => {
    var collection = new Backbone.Collection([
      {id: 1, title: 'Some title'},
      {id: 2, title: 'Some other title'}
    ]);
    var callback = sinon.spy();
    var modelResolver = new BackboneModelResolver({
      collection: () => collection,
      attributesForProps: ['id', 'title'],
      property: 'modelId'
    }, callback);

    modelResolver.get({modelId: 1});
    modelResolver.get({modelId: 2});
    collection.get(2).set('title', 'Changed text');

    expect(callback).to.have.been.called;
  });

  it('stops listening to model on prop change', () => {
    var collection = new Backbone.Collection([
      {id: 1, title: 'Some title'},
      {id: 2, title: 'Some other title'}
    ]);
    var callback = sinon.spy();
    var modelResolver = new BackboneModelResolver({
      collection: () => collection,
      attributesForProps: ['id', 'title'],
      property: 'modelId'
    }, callback);

    modelResolver.get({modelId: 1});
    modelResolver.get({modelId: 2});
    collection.get(1).set('title', 'Changed text');

    expect(callback).not.to.have.been.called;
  });

  it('stops listening to model on dispose', () => {
    var collection = new Backbone.Collection([{id: 1, title: 'Some title'}]);
    var callback = sinon.spy();
    var modelResolver = new BackboneModelResolver({
      collection: () => collection,
      attributesForProps: ['id', 'title'],
      property: 'modelId'
    }, callback);

    modelResolver.get({modelId: 1});
    modelResolver.dispose();
    collection.first().set('title', 'Changed title');

    expect(callback).not.to.have.been.called;
  });

  context('with includeConfiguration option', () => {
    it('includes attributes from a nested configuration model', () => {
      var collection = new Backbone.Collection([{id: 1}]);
      collection.first().configuration = new Backbone.Model({text: 'Some text'});
      var modelResolver = new BackboneModelResolver({
        collection: () => collection,
        includeConfiguration: true,
        property: 'modelId'
      });

      var result = modelResolver.get({modelId: 1});

      expect(result).to.deep.eq({id: 1, text: 'Some text'})
    });

    it('invokes callback when configuration changes', () => {
      var collection = new Backbone.Collection([{id: 1}]);
      collection.first().configuration = new Backbone.Model({text: 'Some text'});
      var callback = sinon.spy();
      var modelResolver = new BackboneModelResolver({
        collection: () => collection,
        includeConfiguration: true,
        property: 'modelId'
      }, callback);

      modelResolver.get({modelId: 1});
      collection.first().configuration.set('title', 'Changed title');

      expect(callback).to.have.been.called;
    });

    it('stops listening to model configuration on prop change', () => {
      var collection = new Backbone.Collection([{id: 1}, {id: 2}]);
      collection.get(1).configuration = new Backbone.Model({title: 'Some text'});
      collection.get(2).configuration = new Backbone.Model({title: 'Some other text'});
      var callback = sinon.spy();
      var modelResolver = new BackboneModelResolver({
        collection: () => collection,
        attributesForProps: ['id', 'title'],
        includeConfiguration: true,
        property: 'modelId'
      }, callback);

      modelResolver.get({modelId: 1});
      modelResolver.get({modelId: 2});
      collection.get(1).configuration.set('title', 'Changed text');

      expect(callback).not.to.have.been.called;
    });

    it('deeply camelizes configuration attribute names', () => {
      var collection = new Backbone.Collection([{id: 1}]);
      collection.first().configuration = new Backbone.Model({
        page_links: [
          {
            image_id: 1
          }
        ]
      });
      var modelResolver = new BackboneModelResolver({
        collection: () => collection,
        includeConfiguration: true,
        property: 'modelId'
      });

      var result = modelResolver.get({modelId: 1});

      expect(result).to.deep.eq({id: 1, pageLinks: [{imageId: 1}]})
    });
  });
});
