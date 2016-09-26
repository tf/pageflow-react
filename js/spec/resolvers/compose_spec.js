import compose from 'resolvers/compose';

import sinon from 'sinon';

describe('compose', () => {
  context('given a transform function and a resolver', () => {
    context('creates a resolver that', () => {
      it('applies the transformation to result of the resolver', () => {
        const Resolver = class {
          get(props, seed) {
            return {counter: 1};
          }
        };
        const increment = function({counter}) { return {counter: counter + 1}; };

        const ComposedResolver = compose(increment, Resolver);
        const resolver = new ComposedResolver({}, () => {});
        const result = resolver.get({}, {});

        expect(result).to.deep.eq({counter: 2});
      });

      it('passes seed to transform function', () => {
        const Resolver = class {
          get(props, seed) {
            return {counter: 1};
          }
        };
        const increment = function({counter}, {step}) { return {counter: counter + step}; };

        const ComposedResolver = compose(increment, Resolver);
        const resolver = new ComposedResolver({}, () => {});
        const result = resolver.get({}, {step: 2});

        expect(result).to.deep.eq({counter: 3});
      });

      it('passes props to inner resolver', () => {
        const Resolver = class {
          get(props, seed) {
            return {counter: props.value};
          }
        };
        const increment = function({counter}) { return {counter: counter + 1}; };

        const ComposedResolver = compose(increment, Resolver);
        const resolver = new ComposedResolver({}, () => {});
        const result = resolver.get({value: 2}, {});

        expect(result).to.deep.eq({counter: 3});
      });

      it('passes seed to inner resolver', () => {
        const Resolver = class {
          get(props, seed) {
            return {counter: seed.value};
          }
        };
        const increment = function({counter}) { return {counter: counter + 1}; };

        const ComposedResolver = compose(increment, Resolver);
        const resolver = new ComposedResolver({}, () => {});
        const result = resolver.get({}, {value: 2});

        expect(result).to.deep.eq({counter: 3});
      });

      it('passes options to inner resolver', () => {
        const Resolver = class {
          constructor(options) {
            this.options = options;
          }

          get(props, seed) {
            return {counter: this.options.value};
          }
        };
        const increment = function({counter}) { return {counter: counter + 1}; };

        const ComposedResolver = compose(increment, Resolver);
        const resolver = new ComposedResolver({value: 2}, () => {});
        const result = resolver.get({}, {});

        expect(result).to.deep.eq({counter: 3});
      });

      it('invokes the callback when the inner resolver invokes it', () => {
        const Resolver = class {
          constructor(options, callback) {
            this.callback = callback;
          }

          get(props, seed) {
            this.callback();
            return {counter: 2};
          }
        };
        const increment = function({counter}) { return {counter: counter + 1}; };
        const callback = sinon.spy();

        const ComposedResolver = compose(increment, Resolver);
        const resolver = new ComposedResolver({}, callback);

        resolver.get({}, {});

        expect(callback).to.have.been.called;
      });

      it('disposes inner resolver on dispose', () => {
        const disposeMethod = sinon.spy();
        const Resolver = class {
          constructor(options, callback) {
            this.dispose = disposeMethod;
          }

          get(props, seed) {
            return {counter: 2};
          }
        };
        const increment = function({counter}) { return {counter: counter + 1}; };

        const ComposedResolver = compose(increment, Resolver);
        const resolver = new ComposedResolver({}, () => {});

        resolver.dispose();

        expect(disposeMethod).to.have.been.called;
      });
    });
  });
});
