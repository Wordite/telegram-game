import { gsap } from 'gsap'

gsap.config({
  force3D: true,
})

const bottomNavigationPick = (el) => {
  const before = el.querySelector('div')

  const tl = gsap.timeline()
  tl.fromTo(
    el,
    {
      scale: 1,
    },
    {
      scale: 0.7,
      duration: 0.2,
    }
  ).to(el, {
    duration: 0.15,
    ease: 'elastic.out(1.2,0.8)',
    scale: 1,
  })

  gsap.fromTo(
    before,
    {
      opacity: 0,
      scale: 0.1,
    },
    {
      opacity: 1,
      scale: 1,
      ease: 'elastic.out(1.2,0.8)',
      duration: 0.6,
    }
  )
}


const buttonClick = (el) => {
  const tl = gsap.timeline()
  tl.fromTo(
    el,
    {
      scale: 1,
    },
    {
      scale: 0.9,
      duration: 0.15,
    }
  ).to(el, {
    duration: 0.2,
    ease: 'elastic.out(1.2,0.8)',
    scale: 1,
  })
}



export const useAnimations = () => {
  return {
    bottomNavigationPick,
    buttonClick
  }
}
