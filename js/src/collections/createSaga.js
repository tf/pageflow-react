import {isItemAction, getItemIdFromItemAction, ensureItemActionId} from './itemActionHelpers';
import {addItemScope} from './itemScopeHelpers';

import {select, fork, cancel, call} from 'redux-saga/effects';
import {takeEvery, runSaga} from 'redux-saga';

import {createItemsSelector} from './selectors';
import {RESET, ADD, REMOVE} from './actions';

export default function(collectionName, {itemSaga, middleware}) {
  const itemsSelector = createItemsSelector(collectionName);

  return saga;

  function* saga() {
    const runningItemSagas = {};
    console.log('IIII');

    yield takeEvery([RESET, ADD, REMOVE],
                    syncItemSagas, runningItemSagas);
  }

  function* syncItemSagas(runningItemSagas) {
    const items = yield select(itemsSelector);
    console.log('sync');
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
    console.log('starting');
    const task = runSaga(itemSaga(), {
      subscribe(callback) {
        console.log('sub');
        return middleware.subscribe(callback);
      },

      dispatch(action) {
        console.log('disp', action);
        ensureItemActionId(action, collectionName, itemId);
        middleware.dispatch(action);
      },

      getState() {
        console.log('get');
        return addItemScope(middleware.getState(), collectionName, itemId);
      }
    });

    yield call(() => task.done);
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

export function createMiddleware() {
  return function middleware({getState, dispatch}) {
    const sagaEmitter = emitter();

    console.log('SETTING');

    middleware.getState = getState;
    middleware.dispatch = dispatch;
    middleware.subscribe = sagaEmitter.subscribe;

    return next => action => {
      const result = next(action);
      
      console.log('middle', action);
      sagaEmitter.emit(action);

      return result;
    };
  };
}

function emitter() {
  const subscribers = [];

  function subscribe(sub) {
    subscribers.push(sub);
    return () => remove(subscribers, sub);
  }

  function emit(item) {
    const arr = subscribers.slice();
    for (var i = 0, len =  arr.length; i < len; i++) {
      arr[i](item);
    }
  }

  return {
    subscribe,
    emit
  };
}

function remove(array, item) {
  const index = array.indexOf(item);

  if (index >= 0) {
    array.splice(index, 1);
  }
}
