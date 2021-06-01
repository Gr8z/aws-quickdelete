import enableButton from './enableButton';

const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    const nodes = Array.from(mutation.addedNodes);
    nodes.forEach(node => {
      const selector = 'button.awsui-button-disabled';
      if (node.matches && node.matches(selector)) {
        enableButton(node);
      }
    });
  });
});

export default observer