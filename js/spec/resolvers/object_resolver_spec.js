import ObjectResolver from 'resolvers/object_resolver';
import Resolver from 'resolvers/resolver';

import sinon from 'sinon';

describe('ObjectResolver', () => {
  class FakeResolver extends Resolver {
    get(props, seed) {
      return `resolved value ${props.other} with ${seed}`;
    }

    triggerCallback() {
      this._handleChange();
    }
  }

  context('with flat fragment', () => {
    it('it copies scalar values', () => {
      var objectResolver = new ObjectResolver({});

      var result = objectResolver.get({key: 123});

      expect(result.key).to.eq(123)
    });

    it('resolves to null if null is passed as props', () => {
      var objectResolver = new ObjectResolver({
        key: (callback) => {
          return new FakeResolver(callback);
        }
      });

      var result = objectResolver.get(null);

      expect(result).to.eq(null)
    });

    it('uses resolver in fragment to resolve value for key', () => {
      var objectResolver = new ObjectResolver({
        key: (callback) => {
          return new FakeResolver(callback);
        }
      });

      var result = objectResolver.get({other: 123}, 'SEED');

      expect(result.key).to.eq('resolved value 123 with SEED');
    });

    it('invokes callback when some resolver signals a change', () => {
      var callback = sinon.spy();
      var resolver;
      var objectResolver = new ObjectResolver({
        key: (callback) => {
          resolver = new FakeResolver(callback);
          return resolver;
        }
      }, callback);

      objectResolver.get({});
      resolver.triggerCallback();

      expect(callback).to.have.been.called;
    });
  });

  context('with nested fragment', () => {
    it('recreates structure with copied scalars ', () => {
      var objectResolver = new ObjectResolver();

      var result = objectResolver.get({
        some: {
          nested: {
            key: 'hello'
          }
        }
      });

      expect(result.some.nested.key).to.eq('hello');
    });

    it('uses resolver in fragment to resolve nested key', () => {
      var objectResolver = new ObjectResolver({
        nested: {
          key: (callback) => {
            return new FakeResolver(callback);
          }
        }
      });

      var result = objectResolver.get({nested: {other: 123}}, 'SEED');

      expect(result.nested.key).to.eq('resolved value 123 with SEED');
    });

    it('invokes callback when resolver of nested key signals a change', () => {
      var callback = sinon.spy();
      var resolver;
      var objectResolver = new ObjectResolver({
        nested: {
          key: (callback) => {
            resolver = new FakeResolver(callback);
            return resolver;
          }
        }
      }, callback);

      objectResolver.get({nested: {}});
      resolver.triggerCallback();

      expect(callback).to.have.been.called;
    });
  });
});
