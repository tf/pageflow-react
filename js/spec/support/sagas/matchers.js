import prettyPrintEffect from './prettyPrintEffect';

export default function sagaMatchers(chai) {
  chai.Assertion.addMethod('yieldEffect', function (effect) {
    const run = this._obj;

    const pretty = prettyPrintEffect(effect);
    const expectedMessage = `expected saga to yield effect ${pretty}`;
    const notExpectedMessage = `expected saga not to effect yield ${pretty}`;

    this.assert(run.yields(effect),
                expectedMessage,
                notExpectedMessage);
  });
}
