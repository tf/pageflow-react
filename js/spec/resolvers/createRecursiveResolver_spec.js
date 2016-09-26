import Resolver from 'resolvers/Resolver';
import createRecursiveResolver from 'resolvers/createRecursiveResolver';

import sinon from 'sinon';

describe('resolver created by createRecursiveResolver', () => {
  class FakeResolver extends Resolver {
    constructor(options, callback) {
      super(callback);

      this.dispose = options.onDispose || sinon.spy();
      this._triggerCallbackOnGet = options.triggerCallbackOnGet;
      this._result = options.result;
    }

    get(props, seed) {
      if (this._triggerCallbackOnGet) {
        this.triggerCallback();
      }

      return this._result;
    }

    triggerCallback() {
      this._handleChange();
    }
  }

  it('returns result of decorated resolver', () => {
    const RecursiveResolver = createRecursiveResolver(FakeResolver);
    const resolver = new RecursiveResolver({
      result: {chapterId: 5}
    });

    var result = resolver.get();

    expect(result.chapterId).to.eq(5);
  });

  it('uses fragments to resolve properties in result', () => {
    const RecursiveResolver = createRecursiveResolver(FakeResolver);
    const resolver = new RecursiveResolver({
      result: {chapterId: 5},
      fragments: {
        chapter: (callback) => new FakeResolver({result: 'chapter'}, callback)
      }
    });

    var result = resolver.get();

    expect(result.chapter).to.eq('chapter');
  });

  it('invokes callback when the nested resolver signals a change', () => {
    const RecursiveResolver = createRecursiveResolver(FakeResolver);
    const callback = sinon.spy();
    var nestedResolver;
    const resolver = new RecursiveResolver({
      result: {chapterId: 5},
      fragments: {
        chapter: (callback) => {
          nestedResolver = new FakeResolver({result: 'chapter'}, callback);
          return nestedResolver;
        }
      }
    }, callback);

    resolver.get();
    nestedResolver.triggerCallback();

    expect(callback).to.have.been.called;
  });

  it('invokes callback when the decorated resolver signals a change', () => {
    const RecursiveResolver = createRecursiveResolver(FakeResolver);
    const callback = sinon.spy();
    const resolver = new RecursiveResolver({
      triggerCallbackOnGet: true,
      result: {chapterId: 5},
    }, callback);

    resolver.get();

    expect(callback).to.have.been.called;
  });

  it('passes dispose on nested resolver', () => {
    const RecursiveResolver = createRecursiveResolver(FakeResolver);
    var nestedResolver;
    const resolver = new RecursiveResolver({
      result: {chapterId: 5},
      fragments: {
        chapter: (callback) => {
          nestedResolver = new FakeResolver({result: 'chapter'}, callback);
          return nestedResolver;
        }
      }
    }, () => {});

    resolver.get();
    resolver.dispose();

    expect(nestedResolver.dispose).to.have.been.called;
  });

  it('passes dispose to decorated resolver', () => {
    const RecursiveResolver = createRecursiveResolver(FakeResolver);
    var disposed = false;
    const resolver = new RecursiveResolver({
      triggerCallbackOnGet: true,
      onDispose: () => { disposed = true; },
      result: {chapterId: 5},
    }, () => {});

    resolver.get();
    resolver.dispose();

    expect(disposed).to.eq(true);
  });
});
