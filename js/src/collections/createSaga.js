import {isItemAction, getItemIdFromItemAction, ensureItemActionId} from './itemActionHelpers';
import {addItemScope} from './itemScopeHelpers';

import {select, fork, cancel} from 'redux-saga/effects';
import {takeEvery} from 'redux-saga';

import {createItemsSelector} from './selectors';
import {RESET, ADD, REMOVE} from './actions';

export default function(collectionName, {itemSaga}) {
  const itemsSelector = createItemsSelector(collectionName);

  return saga;

  function* saga() {
    const runningItemSagas = {};

    yield takeEvery([RESET, ADD, REMOVE],
                    syncItemSagas, runningItemSagas);
  }

  function* syncItemSagas(runningItemSagas) {
    const items = yield select(itemsSelector);

    yield* cancelStaleItemSagas(items, runningItemSagas);
    yield* forkNewItemSagas(items, runningItemSagas);
  }

  function* cancelStaleItemSagas(items, runningItemSagas) {
    yield Object.keys(runningItemSagas).map(runningItemId => {
      if (!(runningItemId in items)) {
        return cancel(runningItemSagas[runningItemId]);
      }
    });
  }

  function* forkNewItemSagas(items, runningItemSagas) {
    const tasks = yield Object.keys(items).map(itemId => {
      if (!runningItemSagas[itemId]) {
        return fork(runItemSaga, parseInt(itemId, 10));
      }
    });

    Object.keys(items).forEach((key, index) => {
      if (!runningItemSagas[key]) {
        runningItemSagas[key] = tasks[index];
      }
    });
  }

  function* runItemSaga(itemId) {
    const iterator = itemSaga();

    let result = {done: false};
    let response;

    while (!result.done) {
      result = iterator.next(response);
      response = yield* handleEffect(result.value, itemId);
    }
  }

  function* handleEffect(effect, itemId) {
    if (effect && effect.SELECT) {
      return yield* handleSelect(effect, itemId);
    }
    else if (effect && effect.PUT) {
      return yield* handlePut(effect, itemId);
    }
    else if (effect && effect.TAKE) {
      return yield* handleTake(effect, itemId);
    }
    else {
      return yield effect;
    }
  }

  function* handleSelect(effect, itemId) {
    return yield select(state => effect.SELECT.selector(
      addItemScope(state, collectionName, itemId),
      ...effect.SELECT.args)
    );
  }

  function* handlePut(effect, itemId) {
    ensureItemActionId(effect.PUT.action, collectionName, itemId);
    return yield effect;
  }

  function* handleTake(effect, itemId) {
    let action;

    do {
      action = yield effect;
    } while (isItemAction(action, collectionName) &&
             getItemIdFromItemAction(action) !== itemId);

    return action;
  }
}
