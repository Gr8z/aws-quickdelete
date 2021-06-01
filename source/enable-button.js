import observer from './observer';

const selector = 'button.awsui-button-disabled';
const element = document.querySelector(selector);

function enableButton(button) {
  if (button.classList.contains('awsui-button-no-text')) return

  const textKeys = ['Delete', 'Empty'];

  textKeys.forEach(key => {
    if (!button.innerText.startsWith(key)) return;

    button.classList.remove('awsui-button-disabled');
    button.disabled = false

    console.log(button)
  });
}

if (element) {
  enableButton(element);
}

observer.observe(document.documentElement, { childList: true, subtree: true });