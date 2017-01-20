import {
  PLAY, PLAYING, PAUSE, PAUSED, SCRUB_TO, SEEK_TO,
  FADE_OUT_AND_PAUSE, PLAY_AND_FADE_IN,
  PREBUFFER, PREBUFFERED,
  BUFFER_UNDERRUN, BUFFER_UNDERRUN_CONTINUE, WAITING, SEEKING, SEEKED,
  META_DATA_LOADED, PROGRESS, TIME_UPDATE, ENDED,
  HAS_NOT_BEEN_PLAYING_FOR_A_MOMENT,
  USER_INTERACTION, USER_IDLE,
  CONTROLS_ENTERED, CONTROLS_LEFT,
  FOCUS_ENTERED_CONTROLS, FOCUS_LEFT_CONTROLS,
  CONTROLS_HIDDEN
} from './actions';

import {HOTKEY_TAB} from 'hotkeys/actions';

import {
  PAGE_WILL_ACTIVATE,
  PAGE_WILL_DEACTIVATE
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
        unplayed: true,
        userHasBeenIdle: false
      };
    case PAGE_WILL_DEACTIVATE:
      return {
        ...state,
        shouldPrebuffer: false
      };

    case PLAY:
      return {
        ...state,
        shouldPlay: true,
        hasBeenPlayingJustNow: true,
        unplayed: false,
        fadeDuration: null,
        isLoading: true
      };
    case PLAYING:
      return {
        ...state,
        isPlaying: true
      };
    case PLAY_AND_FADE_IN:
      return {
        ...state,
        shouldPlay: true,
        hasBeenPlayingJustNow: true,
        fadeDuration: action.payload.fadeDuration,
        isLoading: true
      };
    case PAUSE:
      return {
        ...state,
        shouldPlay: false,
        fadeDuration: null,
        isLoading: false
      };
    case PAUSED:
      if (state.bufferUnderrun) {
        return {
          ...state,
          isPlaying: false,
          hasPlayed: true
        };
      }

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
      return {
        ...state,
        isLoading: true
      };
    case BUFFER_UNDERRUN:
      return {
        ...state,
        bufferUnderrun: true
      };
    case BUFFER_UNDERRUN_CONTINUE:
      return {
        ...state,
        bufferUnderrun: false
      };

    case SCRUB_TO:
      return {
        ...state,
        scrubbingAt: action.payload.time
      };
    case SEEK_TO:
      return {
        ...state,
        shouldSeekTo: action.payload.time
      };

    case SEEKING:
      return {
        ...state,
        isLoading: true
      };
    case SEEKED:
      return {
        ...state,
        scrubbingAt: undefined,
        isLoading: false
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
