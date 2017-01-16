export default function createPageflowPlayer(
  element,
  {emulateTextTracksDisplay, atmoSettings, mediaContext}
) {
  const player = new pageflow.VideoPlayer(element, {
    controlBar: false,
    loadingSpinner: false,
    bigPlayButton: false,
    errorDisplay: false,
    textTrackSettings: false,

    html5: {
      nativeCaptions: element.tagName.toLowerCase() != 'audio' &&
                      pageflow.browser.has('ios platform')
    },

    bufferUnderrunWaiting: true,

    volumeFading: true,
    hooks: pageflow.atmo.createMediaPlayerHooks(atmoSettings),

    mediaEvents: true,
    context: mediaContext
  });

  player.textTrackSettings = {
    getValues() {
      return {};
    }
  };

  player.addClass('video-js');
  player.addClass('player');

  return player;
}
