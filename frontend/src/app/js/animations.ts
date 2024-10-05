import { openScale } from '@hooks/useAnimations'

// CLICK ANIMATION
const pressed = (e) => {
  let el = e.currentTarget
  const target = el.getAttribute('data-clickable-target')

  if (target) el = document.body.querySelector('.' + target)
  const additionClassName = el.getAttribute('data-clickable-effect') ? 'pressed-easy' : 'pressed'

  el.classList.add(additionClassName)
  if (!el.style.transition) el.style.transition = '.25s'
}

const released = (e, isElement = false) => {
  let el = isElement ? e : e.currentTarget
  const target = el.getAttribute('data-clickable-target')

  if (target) el = document.body.querySelector('.' + target)
  const additionClassName = el.getAttribute('data-clickable-effect') ? 'pressed-easy' : 'pressed'

  el.classList.remove(additionClassName)
}

//

export function animations() {
  const clickableElements = [...document.body.querySelectorAll('.clickable')]

  clickableElements.forEach((el) => {
    el.addEventListener('mousedown', pressed)
    el.addEventListener('touchstart', pressed)

    el.addEventListener('mouseup', released)
    el.addEventListener('touchend', released)
  })

  document.body.addEventListener('mouseup', () =>
    clickableElements.forEach((el) => released(el, true))
  )
  document.body.addEventListener('mouseleave', () =>
    clickableElements.forEach((el) => released(el, true))
  )

  openScale()
}
