const enableButton = (button) => {
  if (button.classList.contains('awsui-button-no-text')) return

  const textKeys = ['delete', 'empty', 'terminate'];

  textKeys.forEach(key => {
    if (!button.innerText.toLowerCase().startsWith(key)) return;

    button.classList.remove('awsui-button-disabled');
    button.disabled = false

  });
}

export default enableButton