import togglePlaying from './togglePlaying';
import handlePageDidActivate from './handlePageDidActivate';
import disableScrollIndicatorDuringPlayback from './disableScrollIndicatorDuringPlayback';
import hasNotBeenPlayingForAMoment from './hasNotBeenPlayingForAMoment';
import idling from './idling';
import fadeOutWhenPageWillDeactivate from './fadeOutWhenPageWillDeactivate';
import goToNextPageOnEnd from './goToNextPageOnEnd';
import controlsHidden from './controlsHidden';

export default function*(options = {}) {
  const sagas = [
    togglePlaying(),
    handlePageDidActivate(),

    disableScrollIndicatorDuringPlayback(),

    hasNotBeenPlayingForAMoment(),

    goToNextPageOnEnd(),
    fadeOutWhenPageWillDeactivate()
  ];

  if (options.hideControls) {
    sagas.push([
      idling(),
      controlsHidden()
    ]);
  }

  yield sagas;
}
