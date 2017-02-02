import MediaTag from '../MediaTag';

import {mount, render} from 'enzyme';
import {expect} from 'support/chai';
import sinon from 'sinon';
import {findDOMNode} from 'react-dom';

describe('MediaTag', () => {
  it('renders tag with given name', () => {
    const wrapper = render(<MediaTag tagName="audio" />);

    expect(wrapper).to.have.descendants('audio');
  });

  it('renders given sources', () => {
    const sources = [{type: 'video/mp4', src: 'some.mp4'}];
    const wrapper = render(<MediaTag sources={sources} />);

    expect(wrapper).to.have.exactly(1).descendants('source');
    expect(wrapper).to.have.descendants('source[type="video/mp4"][src="some.mp4"]');
  });

  it('renders given tracks', () => {
    const tracks = [{
      id: '1', kind: 'captions', label: 'Captions', src: 'some.vtt', srclang: 'en'
    }];
    const wrapper = render(<MediaTag tracks={tracks} />);

    expect(wrapper).to.have.exactly(1).descendants('track');
    expect(wrapper).to.have.descendants('track[id="1"]');
    expect(wrapper).to.have.descendants('track[kind="captions"]');
    expect(wrapper).to.have.descendants('track[label="Captions"]');
    expect(wrapper).to.have.descendants('track[srclang="en"]');
    expect(wrapper).to.have.descendants('track[src="some.vtt"]');
  });

  it('renders data-poster attribute for given poster', () => {
    const wrapper = render(<MediaTag poster="http://example.com/poster.png" />);

    expect(wrapper).to.have.descendants('video[data-poster*="poster.png"]');
  });

  it('renders loop attribute', () => {
    const wrapper = render(<MediaTag loop={true} />);

    expect(wrapper).to.have.descendants('video[loop]');
  });

  it('renders muted attribute', () => {
    const wrapper = render(<MediaTag muted={true} />);

    expect(wrapper).to.have.descendants('video[muted]');
  });

  it('renders playsinline attribute', () => {
    const wrapper = render(<MediaTag playsInline={true} />);

    expect(wrapper).to.have.descendants('video[playsinline]');
  });

  it('re-renders when source changes', () => {
    const sources = [{type: 'video/mp4', src: 'some.mp4'}];
    const changedSources = [{type: 'video/mp4', src: 'new.mp4'}];
    const wrapper = mount(<MediaTag sources={sources} />);

    wrapper.setProps({sources: changedSources});

    expect(wrapper.render()).to.have.descendants('source[src="new.mp4"]');
  });

  it('re-renders when poster changes', () => {
    const wrapper = mount(<MediaTag />);

    wrapper.setProps({poster: 'http://example.com/poster.png'});

    expect(wrapper.render()).to.have.descendants('video[data-poster*="poster.png"]');
  });

  it('re-renders when track changes', () => {
    const tracks = [{
      id: '1', kind: 'captions', label: 'Captions', src: 'some.vtt', srclang: 'en'
    }];
    const changedTracks = [{
      id: '1', kind: 'captions', label: 'Captions', src: 'some.vtt', srclang: 'de'
    }];
    const wrapper = mount(<MediaTag tracks={tracks} />);

    wrapper.setProps({tracks: changedTracks});

    expect(wrapper.render()).to.have.descendants('track[srclang="de"]');
  });

  it('triggers onSetup when component mounts', () => {
    const callback = sinon.spy();
    mount(<MediaTag onSetup={callback} />);

    expect(callback).to.have.beenCalled;
  });

  it('triggers onDispose when component unmounts', () => {
    const callback = sinon.spy();
    const wrapper = mount(<MediaTag onDispose={callback} />);

    wrapper.unmount();

    expect(callback).to.have.beenCalled;
  });

  it('triggers onDispose and onSetup when component re-renders', () => {
    const onDispose = sinon.spy();
    const onSetup= sinon.spy();
    const wrapper = mount(<MediaTag tagName="audio"
                                    onSetup={onSetup}
                                    onDispose={onDispose} />);

    onSetup.reset();
    wrapper.setProps({tagName: 'video'});

    expect(sinon.assert).to.have.beenCalled;
    expect(onDispose).to.have.beenCalled;
    expect(onSetup.calledAfter(onDispose)).to.ok;
  });

  it('discards dom changes on re-render', () => {
    const wrapper = mount(<MediaTag tagName="audio" />);

    appendElement(wrapper, 'p');
    wrapper.setProps({tagName: 'video'});

    expect(wrapper.render()).to.not.have.descendants('p');
  });

  it('keeps dom changes when props did not change', () => {
    const wrapper = mount(<MediaTag />);

    appendElement(wrapper, 'p');
    wrapper.update();

    expect(wrapper.render()).to.have.descendants('p');
  });

  function appendElement(wrapper, tagName) {
    // eslint-disable-next-line react/no-find-dom-node
    findDOMNode(wrapper.instance()).appendChild(document.createElement(tagName));
  }
});
