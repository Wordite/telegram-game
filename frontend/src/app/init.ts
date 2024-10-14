import { animations } from './js/animations'
import { observeTextContent } from './js/observeTextContent'

const init = () => {
  const textElements = [...document.body.querySelectorAll('.text')]
  textElements.forEach((el) => {
    const element = el as HTMLElement
    element.style.setProperty('--content-text', `'${el.textContent}'`)

    observeTextContent(el, () => {
      element.style.setProperty('--content-text', `'${el.textContent}'`)
    })
  })

  animations()
}

export default init
