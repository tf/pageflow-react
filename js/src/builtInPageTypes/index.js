import {register as registerPlainPage} from './PlainPage';
import {register as registerVideoPage} from './videoPageType';

export function register() {
  registerPlainPage();
  registerVideoPage();
}
