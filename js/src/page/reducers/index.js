import pageConfiguration from './pageConfiguration';
import pageState from './pageState';

export default function(initialPageConfiguration) {
  return {
    pageConfiguration: pageConfiguration(initialPageConfiguration),
    pageState
  };
}
