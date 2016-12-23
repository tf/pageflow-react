import togglePlaying from './togglePlaying';
import handlePageDidActivate from './handlePageDidActivate';
import disableScrollIndicatorDuringPlayback from './disableScrollIndicatorDuringPlayback';
import hasNotBeenPlayingForAMoment from './hasNotBeenPlayingForAMoment';
import idling from './idling';
import fadeOutWhenPageWillDeactivate from './fadeOutWhenPageWillDeactivate';
import goToNextPageOnEnd from './goToNextPageOnEnd';
import controlsHidden from './controlsHidden';

export default function*(options = {}) {
  yield [
    togglePlaying(),
    handlePageDidActivate(options),

    disableScrollIndicatorDuringPlayback(),

    hasNotBeenPlayingForAMoment(),
    idling(),
    controlsHidden(),

    goToNextPageOnEnd(),
    fadeOutWhenPageWillDeactivate()
  ];
}
