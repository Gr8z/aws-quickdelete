import enableButton from './enableButton';
import observer from './observer';

const selector = 'button.awsui-button-disabled';
const element = document.querySelector(selector);

if (element) {
  enableButton(element);
}

observer.observe(document.documentElement, { childList: true, subtree: true });