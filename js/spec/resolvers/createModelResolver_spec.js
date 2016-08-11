import createModelResolver from 'resolvers/createModelResolver';
import Backbone from 'backbone';
import sinon from 'sinon';

describe('createModelResolver', () => {
  describe('creates resolver that', () => {
    function itBehavesLikeModelResolver(env) {
      it('resolves to attributes hash', () => {
        const attributes = [{id: 5, name: 'some name'}];
        const seed = {models: attributes};
        const collection = new Backbone.Collection(attributes);

        const Resolver = createModelResolver({
          seedProperty: 'models',
          backboneCollection: () => collection,
          attributesForProps: ['name']
        }, env);
        const resolver = new Resolver({
          property: 'someId'
        }, () => {});

        const result = resolver.get({someId: 5}, seed);

        expect(result).to.deep.eq({name: 'some name'});
      });

      it('can use custom id attribute', () => {
        const attributes = [{permaId: 5, name: 'some name'}];
        const seed = {models: attributes};
        const collection = new Backbone.Collection(attributes);

        const Resolver = createModelResolver({
          seedProperty: 'models',
          backboneCollection: () => collection,
          idAttribute: 'permaId',
          attributesForProps: ['name']
        }, env);
        const resolver = new Resolver({
          property: 'someId'
        }, () => {});

        const result = resolver.get({someId: 5}, seed);

        expect(result).to.deep.eq({name: 'some name'});
      });

      it('can include configuration', () => {
        const attributes = [{id: 5, configuration: {title: 'some title'}}];
        const seed = {models: attributes};
        const collection = new Backbone.Collection(attributes);
        collection.first().configuration = new Backbone.Model(attributes[0].configuration);

        const Resolver = createModelResolver({
          seedProperty: 'models',
          backboneCollection: () => collection,
          includeConfiguration: true
        }, env);
        const resolver = new Resolver({
          property: 'someId'
        }, () => {});

        const result = resolver.get({someId: 5}, seed);

        expect(result).to.deep.eq({id: 5, title: 'some title'});
      });
    }

    describe('outside of the editor', () => {
      itBehavesLikeModelResolver({editorMode: false});
    });

    describe('inside of the editor', () => {
      const env = {editorMode: true};

      itBehavesLikeModelResolver(env);

      it('invokes callback when prop attribute changes', () => {
        const attributes = [{id: 5, name: 'some name'}];
        const seed = {models: attributes};
        const collection = new Backbone.Collection(attributes);
        const callback = sinon.spy();

        const Resolver = createModelResolver({
          seedProperty: 'models',
          backboneCollection: () => collection,
          attributesForProps: ['name']
        }, env);
        const resolver = new Resolver({
          property: 'someId'
        }, callback);

        resolver.get({someId: 5}, seed);
        collection.first().set('name', 'other');

        expect(callback).to.have.been.called;
      });

      it('does not invoke callback after dispose', () => {
        const attributes = [{id: 5, name: 'some name'}];
        const seed = {models: attributes};
        const collection = new Backbone.Collection(attributes);
        const callback = sinon.spy();

        const Resolver = createModelResolver({
          seedProperty: 'models',
          backboneCollection: () => collection,
          attributesForProps: ['name']
        }, env);
        const resolver = new Resolver({
          property: 'someId'
        }, callback);

        resolver.get({someId: 5}, seed);
        resolver.dispose();
        collection.first().set('name', 'other');

        expect(callback).not.to.have.been.called;
      });
    });
  });
});
