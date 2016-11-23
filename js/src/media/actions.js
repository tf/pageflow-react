export const TOGGLE_PLAYING = 'MEDIA_TOGGLE_PLAYING';
export const PLAY = 'MEDIA_PLAY';
export const PLAY_AND_FADE_IN = 'MEDIA_PLAY_AND_FADE_IN';
export const PAUSE = 'MEDIA_PAUSE';
export const FADE_OUT_AND_PAUSE = 'MEDIA_FADE_OUT_AND_PAUSE';
export const SEEK_TO = 'MEDIA_SEEK_TO';

export const SCRUBBING_STARTED = 'MEDIA_SCRUBBING_STARTED';
export const SCRUBBING_ENDED = 'MEDIA_SCRUBBING_ENDED';

export const PREBUFFER = 'MEDIA_PREBUFFER';
export const PREBUFFERED = 'MEDIA_PREBUFFERED';
export const ABORT_PREBUFFERING = 'MEDIA_ABORT_PREBUFFERING';

export const META_DATA_LOADED = 'MEDIA_META_DATA_LOADED';
export const PLAYING = 'MEDIA_PLAYING';
export const PAUSED = 'MEDIA_PAUSED';
export const TIME_UPDATE = 'MEDIA_TIME_UPDATE';
export const ENDED = 'MEDIA_ENDED';

export const HAS_NOT_BEEN_PLAYING_FOR_A_MOMENT = 'MEDIA_HAS_NOT_BEEN_PLAYING_FOR_A_MOMENT';

export const USER_INTERACTION = 'MEDIA_USER_INTERACTION';
export const USER_IDLE = 'MEDIA_USER_IDLE';

export const CONTROLS_ENTERED = 'MEDIA_CONTROLS_ENTERED';
export const CONTROLS_LEFT = 'MEDIA_CONTROLS_LEFT';


export function togglePlaying() {
  return pageAction(TOGGLE_PLAYING);
}

export function play() {
  return pageAction(PLAY);
}

export function playAndFadeIn({fadeDuration}) {
  return pageAction(PLAY_AND_FADE_IN, {
    fadeDuration
  });
}

export function pause() {
  return pageAction(PAUSE);
}

export function fadeOutAndPause({fadeDuration}) {
  return pageAction(FADE_OUT_AND_PAUSE, {
    fadeDuration
  });
}

export function seekTo(time) {
  return pageAction(SEEK_TO, {
    time
  });
}


export function prebuffer() {
  return {
    type: PREBUFFER
  };
}

export function prebuffered() {
  return {
    type: PREBUFFERED
  };
}

export function abortPrebuffering() {
  return {
    type: ABORT_PREBUFFERING
  };
}


export function scrubbingStarted() {
  return pageAction(SCRUBBING_STARTED);
}

export function scrubbingEnded() {
  return pageAction(SCRUBBING_STARTED);
}


export function playing() {
  return pageAction(PLAYING);
}

export function paused() {
  return pageAction(PAUSED);
}

export function timeUpdate({currentTime}) {
  return pageAction(TIME_UPDATE, {
    currentTime
  });
}

export function metaDataLoaded({duration}) {
  return pageAction(META_DATA_LOADED, {
    duration
  });
}

export function ended() {
  return pageAction(ENDED);
}


export function hasNotBeenPlayingForAMoment(value) {
  return pageAction(HAS_NOT_BEEN_PLAYING_FOR_A_MOMENT);
}


export function userInteraction() {
  return pageAction(USER_INTERACTION);
}

export function userIdle() {
  return pageAction(USER_IDLE);
}

export function controlsEntered() {
  return pageAction(CONTROLS_ENTERED);
}

export function controlsLeft() {
  return pageAction(CONTROLS_LEFT);
}


function pageAction(type, payload = {}) {
  return {
    type,
    meta: {
      collectionName: 'pages'
    },
    payload
  };
}
