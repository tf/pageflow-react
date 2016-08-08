import createPage from 'create_page';
import withPageStateProp from 'withPageStateProp';

import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'support/chai';

describe('createPage', () => {
  context('returns wrapper component that', () => {
    const seed = {
      pages: [
        {perma_id: 5, configuration: {title: 'Some title'}}
      ]
    };

    const PageComponent = class extends React.Component {
      render() {
        return <p />;
      }
    };

    it('passes page prop for given page id', () => {
      const Page = createPage(PageComponent);

      const wrapper = mount(<Page pageId={5} resolverSeed={seed} />);

      expect(wrapper.find(PageComponent).prop('page').title).to.eq('Some title');
    });

    it('can be combined with withPageStateProp to obtain pageState', () => {
      const Page = createPage(withPageStateProp(PageComponent));

      const wrapper = mount(<Page pageId={5} resolverSeed={seed}
                                  isPreloaded={true} isPrepared={false} />);

      expect(wrapper.find(PageComponent).prop('pageState'))
                    .to.deep.eq({isPreloaded: true, isPrepared: false});
    });
  });
});
