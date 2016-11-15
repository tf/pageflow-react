import scheduleUnprepare from '../scheduleUnprepare';

import {pageScheduleUnprepare, pageDidPrepare, PAGE_DID_UNPREPARE} from '../../actions';

import {expect} from 'support/chai';
import sinon from 'sinon';
import {runInPageScope} from 'support/sagas';

describe('scheduleUnprepare', () => {
  it('puts unprepare action after delay on schedule unprepare action', () => {
    const run = runInPageScope(scheduleUnprepare)
      .dispatch(pageScheduleUnprepare())
      .delayElapsed();

    expect(run.put).to.have.been.calledWith(sinon.match({type: PAGE_DID_UNPREPARE}));
  });

  it('does not put unprepare if page is prepared again before delay elapses', () => {
    const run = runInPageScope(scheduleUnprepare)
      .dispatch(pageScheduleUnprepare())
      .dispatch(pageDidPrepare())
      .delayElapsed();

    expect(run.put).not.to.have.been.calledWith(sinon.match({type: PAGE_DID_UNPREPARE}));
  });
});
