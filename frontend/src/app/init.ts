import { animations } from "./js/animations"
import { observeTextContent } from "./js/observeTextContent"

const init = () => {
    const textElements = [...document.body.querySelectorAll('.text')]
    textElements.forEach(el => {
        el.style.setProperty('--content-text', `'${el.textContent}'`)

        observeTextContent(el, () => {
            el.style.setProperty('--content-text', `'${el.textContent}'`)
        })
    })

    animations()
}


export default init
