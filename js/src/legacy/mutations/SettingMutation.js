import Mutation from './Mutation';

export default class extends Mutation {
  perform(value) {
    pageflow.settings.set(this.props.property, value);
  }
}
