import togglePlaying from './togglePlaying';
//import autoplay from './autoplay';
//import disableScrollIndicatorDuringPlayback from './disableScrollIndicatorDuringPlayback';
//import keepHasBeenPlayingJustNowUpdated from './keepHasBeenPlayingJustNowUpdated';
//import keepUserIsIdleUpdated from './keepUserIsIdleUpdated';
import fadeOutWhenPageWillDeactivate from './fadeOutWhenPageWillDeactivate';

export default function*(scrollIndicator) {
  yield [
    togglePlaying(),
//    autoplay(),
  //  disableScrollIndicatorDuringPlayback(scrollIndicator),
   // keepHasBeenPlayingJustNowUpdated(),
   // keepUserIsIdleUpdated(),
    fadeOutWhenPageWillDeactivate()
  ];
}
