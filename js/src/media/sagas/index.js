import togglePlaying from './togglePlaying';
import handlePageDidActivate from './handlePageDidActivate';
import disableScrollIndicatorDuringPlayback from './disableScrollIndicatorDuringPlayback';
import hasNotBeenPlayingForAMoment from './hasNotBeenPlayingForAMoment';
import idling from './idling';
import fadeOutWhenPageWillDeactivate from './fadeOutWhenPageWillDeactivate';
import goToNextPageOnEnd from './goToNextPageOnEnd';

export default function*() {
  yield [
    togglePlaying(),
    handlePageDidActivate(),

    disableScrollIndicatorDuringPlayback(),

    hasNotBeenPlayingForAMoment(),
    idling(),

    goToNextPageOnEnd(),
    fadeOutWhenPageWillDeactivate()
  ];
}
