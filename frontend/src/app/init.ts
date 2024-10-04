

const init = () => {
    const textElements = [...document.body.querySelectorAll('.text')]
    textElements.forEach(el => {
        el.style.setProperty('--content-text', `'${el.textContent}'`)
    })
}


export default init
