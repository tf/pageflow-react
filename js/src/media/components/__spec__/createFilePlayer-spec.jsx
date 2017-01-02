import createFilePlayer from '../createFilePlayer';

import {expect} from 'support/chai';
import {mount} from 'enzyme';
import sinon from 'sinon';
import Backbone from 'backbone';

describe('createFilePlayer', () => {
  describe('returns component that', () => {
    function setup({
      tagName = 'video',
      sources = () => [],
      poster,
      emulateTextTracksDisplay,
      createPlayer,
    } = {}) {
      const mockPlayer = createMockPlayer();

      const FilePlayer = createFilePlayer({
        tagName,
        sources,
        poster,
        emulateTextTracksDisplay,
        createPlayer: createPlayer || (el => {
          mockPlayer.el = el;
          return mockPlayer;
        })
      }).WrappedComponent;

      return {FilePlayer, mockPlayer};
    }

    it('renders media tag with given tag name', () => {
      const {FilePlayer} = setup({
        tagName: 'audio'
      });

      const wrapper = mount(<FilePlayer file={{}}
                                        playerState={{}}
                                        playerActions={{}}/>);

      expect(wrapper.render()).to.have.descendants('audio');
    });

    it('renders media tag with given sources', () => {
      const {FilePlayer} = setup({
        sources: file => [
          {type: 'video/mp4', src: file.src}
        ]
      });
      const file = {
        src: 'some.mp4'
      };

      const wrapper = mount(<FilePlayer file={file} playerState={{}} playerActions={{}}/>);

      expect(wrapper.render()).to.have.descendants('source[src="some.mp4"]');
    });

    it('passes quality to sources function', () => {
      const {FilePlayer} = setup({
        sources: (file, quality) => [
          {type: 'video/mp4', src: `${quality}.mp4`}
        ]
      });

      const wrapper = mount(<FilePlayer file={{}}
                                        quality="high"
                                        playerState={{}}
                                        playerActions={{}}/>);

      expect(wrapper.render()).to.have.descendants('source[src="high.mp4"]');
    });

    it('renders media tag with poster given by option', () => {
      const {FilePlayer} = setup({
        poster: file => file.posterUrl
      });
      const file = {
        posterUrl: 'some-poster.png'
      };

      const wrapper = mount(<FilePlayer file={file} playerState={{}} playerActions={{}}/>);

      expect(wrapper.render()).to.have.descendants('video[poster="some-poster.png"]');
    });

    it('renders media tag with text tracks from props', () => {
      const {FilePlayer} = setup();
      const textTracks = {
        files: [{srclang: 'en', urls: {vtt: 'some.vtt'}}]
      };

      const wrapper = mount(<FilePlayer file={{}}
                                        textTracks={textTracks}
                                        playerState={{}}
                                        playerActions={{}}/>);

      expect(wrapper.render()).to.have.descendants('track[srclang="en"]');
    });

    it('does not render text tracks when text tracks are disabled', () => {
      const {FilePlayer} = setup();
      const textTracks = {
        files: [{srclang: 'en', urls: {vtt: 'some.vtt'}}]
      };

      const wrapper = mount(<FilePlayer file={{}}
                                        textTracksEnabled={false}
                                        textTracks={textTracks}
                                        playerState={{}}
                                        playerActions={{}}/>);

      expect(wrapper.render()).not.to.have.descendants('track');
    });

    [
      {event: 'play', action: 'playing'},
      {event: 'pause', action: 'paused'},
      {event: 'loadedmetadata', action: 'metaDataLoaded', payload: {duration: 10}},
      {event: 'timeupdate', action: 'timeUpdate', payload: {currentTime: 5}},
      {event: 'ended', action: 'ended'},
    ].forEach(({action, event, payload}) => {
      it(`invokes ${action} playerAction when player emits ${event}`, () => {
        const {FilePlayer, mockPlayer} = setup();
        const playerActions = {
          [action]: sinon.spy()
        };

        mount(<FilePlayer file={{}}
                          playerState={{}}
                          playerActions={playerActions}/>);

        mockPlayer.currentTime.returns(5);
        mockPlayer.duration.returns(10);
        mockPlayer.trigger(event);

        expect(playerActions[action]).to.have.been.calledWith(payload);
      });
    });

    it('calls play on player when shouldPlay changes to true in playerState', () => {
      const {FilePlayer, mockPlayer} = setup();

      const wrapper = mount(<FilePlayer file={{}}
                                        playerState={{shouldPlay: false}}
                                        playerActions={{}}/>);

      wrapper.setProps({playerState: {shouldPlay: true}});

      expect(mockPlayer.play).to.have.been.called;
    });

    it('calls playAndFadeIn on player when shouldPlay changes to true and fadeDuration is present', () => {
      const {FilePlayer, mockPlayer} = setup();

      const wrapper = mount(<FilePlayer file={{}}
                                        playerState={{shouldPlay: false}}
                                        playerActions={{}}/>);

      wrapper.setProps({playerState: {shouldPlay: true, fadeDuration: 500}});

      expect(mockPlayer.playAndFadeIn).to.have.been.calledWith(500);
    });

    it('calls pause on player when shouldPlay changes to false in playerState', () => {
      const {FilePlayer, mockPlayer} = setup();

      const wrapper = mount(<FilePlayer file={{}}
                                        playerState={{shouldPlay: true}}
                                        playerActions={{}}/>);

      wrapper.setProps({playerState: {shouldPlay: false}});

      expect(mockPlayer.pause).to.have.been.called;
    });

    it('calls fadeOutAndPause on player when shouldPlay changes to false and fadeDuration is present', () => {
      const {FilePlayer, mockPlayer} = setup();

      const wrapper = mount(<FilePlayer file={{}}
                                        playerState={{shouldPlay: true}}
                                        playerActions={{}}/>);

      wrapper.setProps({playerState: {shouldPlay: false, fadeDuration: 500}});

      expect(mockPlayer.fadeOutAndPause).to.have.been.calledWith(500);
    });

    it('disposes the player when the component unmounts', () => {
      const {FilePlayer, mockPlayer} = setup();

      const wrapper = mount(<FilePlayer file={{}}
                                        playerState={{}}
                                        playerActions={{}}/>);

      wrapper.unmount();

      expect(mockPlayer.dispose).to.have.been.called;
    });

    it('passes atmo settings to createPlayer function', () => {
      let passedAtmoSettings;
      const {FilePlayer} = setup({
        createPlayer: (element, {atmoSettings}) => {
          passedAtmoSettings = atmoSettings;
          return createMockPlayer();
        }
      });

      mount(<FilePlayer file={{}}
                        atmoDuringPlayback="pause"
                        playerState={{}}
                        playerActions={{}}/>);

      expect(passedAtmoSettings).to.eql({'atmo_during_playback': 'pause'});
    });

    it('updates atmo settings that are passed to player in place', () => {
      let passedAtmoSettings;
      const {FilePlayer} = setup({
        createPlayer: (element, {atmoSettings}) => {
          passedAtmoSettings = atmoSettings;
          return createMockPlayer();
        }
      });

      const wrapper = mount(<FilePlayer file={{}}
                                        atmoDuringPlayback="pause"
                                        playerState={{}}
                                        playerActions={{}}/>);

      wrapper.setProps({atmoDuringPlayback: 'play'});

      expect(passedAtmoSettings).to.eql({'atmo_during_playback': 'play'});
    });

    it('passes emulateTextTracksDisplay to createPlayer function', () => {
      let passedValue;
      const {FilePlayer} = setup({
        emulateTextTracksDisplay: true,
        createPlayer: (element, {emulateTextTracksDisplay}) => {
          passedValue = emulateTextTracksDisplay;
          return createMockPlayer();
        }
      });

      mount(<FilePlayer file={{}}
                                        atmoDuringPlayback="pause"
                                        playerState={{}}
                                        playerActions={{}}/>);

      expect(passedValue).to.eq(true);
    });

    it('passes mediaContext from context to createPlayer function', () => {
      let passedMediaContext;
      const {FilePlayer} = setup({
        emulateTextTracksDisplay: true,
        createPlayer: (element, {mediaContext}) => {
          passedMediaContext = mediaContext;
          return createMockPlayer();
        }
      });
      const mediaContext = {};

      mount(<FilePlayer file={{}}
                        playerState={{}}
                        playerActions={{}}/>,
            {context: {mediaContext}});

      expect(passedMediaContext).to.eq(mediaContext);
    });

    it('updates text track modes on mount', () => {
      const {FilePlayer, mockPlayer} = setup();
      const textTracks = {
        files: [
          {id: 5, urls: {vtt: 'some.vtt'}},
          {id: 6, urls: {vtt: 'other.vtt'}}
        ],
        activeFileId: 5
      };

      mount(<FilePlayer file={{}}
                        textTracks={textTracks}
                        playerState={{}}
                        playerActions={{}}/>);

      expect(mockPlayer.textTracks()[0].mode).to.eq('showing');
      expect(mockPlayer.textTracks()[1].mode).to.eq('disabled');
    });

    it('updates text track modes when text tracks settings change', () => {
      const {FilePlayer, mockPlayer} = setup();
      const textTracks = {
        files: [
          {id: 5, urls: {vtt: 'some.vtt'}},
          {id: 6, urls: {vtt: 'other.vtt'}}
        ]
      };

      const wrapper = mount(<FilePlayer file={{}}
                                        textTracks={textTracks}
                                        playerState={{}}
                                        playerActions={{}}/>);
      wrapper.setProps({
        textTracks: {
          ...textTracks,
          activeFileId: 5
        }
      });

      expect(mockPlayer.textTracks()[0].mode).to.eq('showing');
      expect(mockPlayer.textTracks()[1].mode).to.eq('disabled');
    });
  });

  function createMockPlayer(element) {
    return {
      currentTime: sinon.stub(),
      duration: sinon.stub(),

      textTracks: function() {
        return this.el ? this.el.querySelectorAll('track') : [];
      },

      play: sinon.spy(),
      playAndFadeIn: sinon.spy(),
      pause: sinon.spy(),
      fadeOutAndPause: sinon.spy(),
      dispose: sinon.spy(),

      ...Backbone.Events
    };
  }
});
