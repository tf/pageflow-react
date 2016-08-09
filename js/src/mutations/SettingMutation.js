import Mutation from './mutation';

export default class extends Mutation {
  perform(value) {
    pageflow.settings.set(this.props.property, value);
  }
}
