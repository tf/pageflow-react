export const SHOULD_TOGGLE_PLAYING = 'SHOULD_TOGGLE_PLAYING';
export const SHOULD_PLAY = 'SHOULD_PLAY';
export const SHOULD_PLAY_AND_FADE_IN = 'SHOULD_PLAY_AND_FADE_IN';
export const SHOULD_PAUSE = 'SHOULD_PAUSE';
export const SHOULD_FADE_OUT_AND_PAUSE = 'SHOULD_FADE_OUT_AND_PAUSE';
export const SHOULD_SEEK_TO = 'SHOULD_SEEK_TO';

export const DID_START_SCRUBBING = 'DID_START_SCRUBBING';
export const DID_STOP_SCRUBBING = 'DID_STOP_SCRUBBING';

export const DID_LOAD_META_DATA = 'DID_LOAD_META_DATA';
export const WILL_PLAY = 'WILL_PLAY';
export const DID_PAUSE = 'DID_PAUSE';
export const DID_TIME_UPDATE = 'DID_TIME_UPDATE';
export const DID_END = 'DID_END';

export const UPDATE_HAS_BEEN_PLAYING_JUST_NOW = 'UPDATE_HAS_BEEN_PLAYING_JUST_NOW';

export const USER_INTERACTION = 'USER_INTERACTION';
export const USER_IDLE = 'USER_IDLE';
export const ENTER_CONTROLS = 'ENTER_CONTROLS';
export const LEAVE_CONTROLS = 'LEAVE_CONTROLS';


export function shouldTogglePlaying() {
  return {
    type: SHOULD_TOGGLE_PLAYING
  };
}

export function shouldPlay() {
  return {
    type: SHOULD_PLAY
  };
}

export function shouldPlayAndFadeIn({fadeDuration}) {
  return {
    type: SHOULD_PLAY_AND_FADE_IN,
    payload: {
      fadeDuration
    }
  };
}

export function shouldPause() {
  return {
    type: SHOULD_PAUSE
  };
}

export function shouldFadeOutAndPause({fadeDuration}) {
  return {
    type: SHOULD_FADE_OUT_AND_PAUSE,
    payload: {
      fadeDuration
    }
  };
}

export function shouldSeekTo(time) {
  return {
    type: SHOULD_SEEK_TO,
    payload: {
      time
    }
  };
}


export function didStartScrubbing() {
  return {
    type: DID_START_SCRUBBING
  };
}

export function didStopScrubbing() {
  return {
    type: DID_STOP_SCRUBBING
  };
}


export function willPlay() {
  return {
    type: WILL_PLAY
  };
}

export function didPause() {
  return {
    type: DID_PAUSE
  };
}

export function didTimeUpdate({currentTime}) {
  return {
    type: DID_TIME_UPDATE,
    payload: {
      currentTime
    }
  };
}

export function didLoadMetaData({duration}) {
  return {
    type: DID_LOAD_META_DATA,
    payload: {
      duration
    }
  };
}

export function didEnd() {
  return {
    type: DID_END
  };
}


export function updateHasBeenPlayingJustNow(value) {
  return {
    type: UPDATE_HAS_BEEN_PLAYING_JUST_NOW,
    payload: {
      value
    }
  };
}


export function userInteraction() {
  return {
    type: USER_INTERACTION
  };
}

export function userIdle() {
  return {
    type: USER_IDLE
  };
}

export function enterControls() {
  return {
    type: ENTER_CONTROLS
  };
}

export function leaveControls() {
  return {
    type: LEAVE_CONTROLS
  };
}
