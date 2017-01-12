import {
  PLAY, PAUSE, PAUSED, SEEK_TO,
  FADE_OUT_AND_PAUSE, PLAY_AND_FADE_IN,
  PREBUFFER, PREBUFFERED,
  BUFFER_UNDERRUN, WAITING, SEEKING, SEEKED,
  SCRUBBING_STARTED, SCRUBBING_ENDED,
  META_DATA_LOADED, PROGRESS, TIME_UPDATE, ENDED,
  HAS_NOT_BEEN_PLAYING_FOR_A_MOMENT,
  USER_INTERACTION, USER_IDLE,
  CONTROLS_ENTERED, CONTROLS_LEFT,
  FOCUS_ENTERED_CONTROLS, FOCUS_LEFT_CONTROLS,
  CONTROLS_HIDDEN
} from './actions';

import {HOTKEY_TAB} from 'hotkeys/actions';

import {
  PAGE_WILL_ACTIVATE
} from 'pages/actions';

export default function({scope = 'default'} = {}) {
  return function reducer(state = {}, action) {
    if (action.meta &&
        action.meta.mediaScope &&
        action.meta.mediaScope !== scope) {
      return state;
    }

    switch (action.type) {
    case PAGE_WILL_ACTIVATE:
      return {
        ...state,
        hasPlayed: false,
        userHasBeenIdle: false
      };

    case PLAY:
      return {
        ...state,
        shouldPlay: true,
        isPlaying: true,
        hasPlayed: true,
        hasBeenPlayingJustNow: true,
        fadeDuration: null,
        isLoading: true
      };
    case PLAY_AND_FADE_IN:
      return {
        ...state,
        shouldPlay: true,
        isPlaying: true,
        hasPlayed: true,
        hasBeenPlayingJustNow: true,
        fadeDuration: action.payload.fadeDuration,
        isLoading: true
      };
    case PAUSED:
    case PAUSE:
      return {
        ...state,
        shouldPlay: false,
        isPlaying: false,
        fadeDuration: null,
        isLoading: false
      };
    case FADE_OUT_AND_PAUSE:
      return {
        ...state,
        shouldPlay: false,
        isPlaying: false,
        fadeDuration: action.payload.fadeDuration,
        isLoading: false
      };

    case SEEK_TO:
      return {
        ...state,
        shouldSeekTo: action.payload.time
      };

    case PREBUFFER:
      return {
        ...state,
        shouldPrebuffer: true
      };
    case PREBUFFERED:
      return {
        ...state,
        shouldPrebuffer: false
      };

    case WAITING:
    case BUFFER_UNDERRUN:
      return {
        ...state,
        isLoading: true
      };
    case SEEKING:
      return {
        ...state,
        isSeeking: true,
        isLoading: true
      };
    case SEEKED:
      return {
        ...state,
        isSeeking: false,
        isLoading: false
      };

    case SCRUBBING_STARTED:
      return {
        ...state,
        isScrubbing: true
      };
    case SCRUBBING_ENDED:
      return {
        ...state,
        isScrubbing: false
      };

    case META_DATA_LOADED:
      return {
        ...state,
        currentTime: action.payload.currentTime,
        duration: action.payload.duration
      };
    case PROGRESS:
      return {
        ...state,
        bufferedEnd: action.payload.bufferedEnd
      };
    case TIME_UPDATE:
      return {
        ...state,
        currentTime: action.payload.currentTime,
        isLoading: false
      };
    case ENDED:
      return {
        ...state,
        shouldPlay: false,
        isPlaying: false
      };

    case HAS_NOT_BEEN_PLAYING_FOR_A_MOMENT:
      return {
        ...state,
        hasBeenPlayingJustNow: false
      };

    case HOTKEY_TAB:
    case USER_INTERACTION:
      return {
        ...state,
        userIsIdle: false,
        controlsHidden: false
      };
    case USER_IDLE:
      return {
        ...state,
        userIsIdle: true,
        userHasBeenIdle: true
      };

    case CONTROLS_ENTERED:
      return {
        ...state,
        userHoveringControls: true
      };
    case CONTROLS_LEFT:
      return {
        ...state,
        userHoveringControls: false
      };
    case FOCUS_ENTERED_CONTROLS:
      return {
        ...state,
        focusInsideControls: true
      };
    case FOCUS_LEFT_CONTROLS:
      return {
        ...state,
        focusInsideControls: false
      };

    case CONTROLS_HIDDEN:
      return {
        ...state,
        controlsHidden: true
      };


    default:
      return state;
    }
  };
}
