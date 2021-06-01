const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    const nodes = Array.from(mutation.addedNodes);
    nodes.forEach(node => {
      if (node.matches && node.matches(selector)) {
        enableButton(node);
      }
    });
  });
});

export default observer