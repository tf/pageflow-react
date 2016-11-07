export const PAGE_DID_ACTIVATE = 'PAGE_DID_ACTIVATE';
export const PAGE_WILL_ACTIVATE = 'PAGE_WILL_ACTIVATE';
export const PAGE_DID_DEACTIVATE = 'PAGE_DID_DEACTIVATE';
export const PAGE_WILL_DEACTIVATE = 'PAGE_WILL_DEACTIVATE';

export const PAGE_DID_PRELOAD = 'PAGE_DID_PRELOAD';
export const PAGE_DID_PREPARE = 'PAGE_DID_PREPARE';
export const PAGE_SCHEDULE_UNPREPARE = 'PAGE_SCHEDULE_UNPREPARE';
export const PAGE_DID_UNPREPARE = 'PAGE_DID_UNPREPARE';

export const PAGE_DID_RESIZE = 'PAGE_DID_RESIZE';

export const PAGE_UPDATE = 'PAGE_UPDATE';

export function pageWillActivate({position}) {
  return {
    type: PAGE_WILL_ACTIVATE,
    payload: {
      position
    }
  };
}

export function pageDidActivate() {
  return {
    type: PAGE_DID_ACTIVATE
  };
}

export function pageWillDeactivate() {
  return {
    type: PAGE_WILL_DEACTIVATE
  };
}

export function pageDidDeactivate() {
  return {
    type: PAGE_DID_DEACTIVATE
  };
}

export function pageDidPreload() {
  return {
    type: PAGE_DID_PRELOAD
  };
}


export function pageDidPrepare() {
  return {
    type: PAGE_DID_PREPARE
  };
}

export function pageScheduleUnprepare() {
  return {
    type: PAGE_SCHEDULE_UNPREPARE
  };
}

export function pageDidUnprepare() {
  return {
    type: PAGE_DID_UNPREPARE
  };
}


export function pageDidResize() {
  return {
    type: PAGE_DID_RESIZE
  };
}


export function pageUpdate(pageConfiguration) {
  return {
    type: PAGE_UPDATE,
    payload: {
      pageConfiguration
    }
  };
}
