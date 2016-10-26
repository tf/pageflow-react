import {
  PAGE_UPDATE, PAGE_WILL_ACTIVATE,

  SHOULD_PLAY, SHOULD_PAUSE, SHOULD_SEEK_TO,
  SHOULD_FADE_OUT_AND_PAUSE, SHOULD_PLAY_AND_FADE_IN,
  DID_START_SCRUBBING, DID_STOP_SCRUBBING,
  DID_LOAD_META_DATA, DID_TIME_UPDATE, DID_END,
  UPDATE_HAS_BEEN_PLAYING_JUST_NOW,
  USER_INTERACTION, USER_IDLE, ENTER_CONTROLS, LEAVE_CONTROLS
} from './actions';

export default function reducer(state, action) {
  switch (action.type) {
  case PAGE_UPDATE:
    return {
      ...state,
      pageConfiguration: action.payload.pageConfiguration
    };

  case PAGE_WILL_ACTIVATE:
    return {
      ...state,
      hasPlayed: false,
      userHasBeenIdle: false
    };

  case SHOULD_PLAY:
    return {
      ...state,
      shouldPlay: true,
      isPlaying: true,
      hasPlayed: true,
      fadeDuration: null
    };
  case SHOULD_PLAY_AND_FADE_IN:
    return {
      ...state,
      shouldPlay: true,
      isPlaying: true,
      hasPlayed: true,
      fadeDuration: action.payload.fadeDuration
    };
  case SHOULD_PAUSE:
    return {
      ...state,
      shouldPlay: false,
      isPlaying: false,
      fadeDuration: null
    };
  case SHOULD_FADE_OUT_AND_PAUSE:
    return {
      ...state,
      shouldPlay: false,
      isPlaying: false,
      fadeDuration: action.payload.fadeDuration
    };

  case SHOULD_SEEK_TO:
    return {
      ...state,
      shouldSeekTo: action.payload.time
    };

  case DID_START_SCRUBBING:
    return {
      ...state,
      isScrubbing: true
    };
  case DID_STOP_SCRUBBING:
    return {
      ...state,
      isScrubbing: false
    };

  case DID_LOAD_META_DATA:
    return {
      ...state,
      duration: action.payload.duration
    };
  case DID_TIME_UPDATE:
    return {
      ...state,
      currentTime: action.payload.currentTime
    };
  case DID_END:
    return {
      ...state,
      shouldPlay: false,
      isPlaying: false
    };

  case UPDATE_HAS_BEEN_PLAYING_JUST_NOW:
    return {
      ...state,
      hasBeenPlayingJustNow: action.payload.value
    };

  case USER_INTERACTION:
    return {
      ...state,
      userIsIdle: false,
    };
  case USER_IDLE:
    return {
      ...state,
      userIsIdle: true,
      userHasBeenIdle: true
    };

  case ENTER_CONTROLS:
    return {
      ...state,
      userHoveringControls: true
    };
  case LEAVE_CONTROLS:
    return {
      ...state,
      userHoveringControls: false
    };

  default:
    return state;
  }
}
