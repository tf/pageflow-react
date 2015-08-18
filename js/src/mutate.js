import UpdatePageMutation from './mutations/update_page_mutation';
import UpdatePageLinkMutation from './mutations/update_page_link_mutation';

var mutations = {
  updatePage: UpdatePageMutation,
  updatePageLink: UpdatePageLinkMutation
};

export default function(mutationName, props) {
  var mutation = mutations[mutationName];

  if (!mutation) {
    throw `Unknown mutation ${mutationName}`;
  }

  return new mutation(props).perform();
};
