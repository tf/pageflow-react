import {util} from 'chai';
import prettyPrintEffect from './prettyPrintEffect';

const isEqual = util.eql;

export default function runSaga(saga) {
  const responses = [];

  return {
    allow(effect, result) {
      responses.push({
        effect,
        result
      });

      return this;
    },


    yields(expectedEffect) {
      var nextResponse;
      var result;
      var effect;
      var counter = 0;

      while (!isEqual(effect, expectedEffect)) {
        counter += 1;

        if (counter > 100) {
          throw new Error('Saga yielded more than 100 effects. Infinite loop?');
        }

        result = nextResponse ? saga.next(nextResponse.result) : saga.next();
        effect = result.value;

        if (result.done) {
          return false;
        }

        nextResponse = responses.find((response) =>
          isEqual(response.effect, effect)
        );

        if (!nextResponse && needsResponse(effect)) {
          throw new Error(`No allowed response for effect ${prettyPrintEffect(effect)}.`);
        }
      }

      return true;
    }
  };
}

function needsResponse(effect) {
  return effect.SELECT || effect.TAKE;
}
