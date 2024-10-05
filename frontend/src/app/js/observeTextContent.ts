export function observeTextContent(element, handleChange) {
  const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
      if (mutation.type === 'characterData') {
        handleChange(mutation.target.data)
      }
    }
  })

  observer.observe(element, {
    subtree: true,
    characterData: true,
  })

  return observer
}
