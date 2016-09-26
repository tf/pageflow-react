import Resolver from './Resolver';

import UpdatePageMutation from 'mutations/UpdatePageMutation';
import UpdatePageLinkMutation from 'mutations/UpdatePageLinkMutation';
import SettingMutation from 'mutations/SettingMutation';

const mutations = {
  updatePage: UpdatePageMutation,
  updatePageLink: UpdatePageLinkMutation,
  setting: SettingMutation
};

export default class MutationResolver extends Resolver {
  constructor(options, callback) {
    super(callback);

    this.mutation = mutations[options.name];
    this.props = options.props;

    if (!this.mutation) {
      throw `Unknown mutation ${options.name}.`;
    }
  }

  get() {
    const instance = new this.mutation(this.props);
    return (...args) => instance.perform(...args);
  }
}
