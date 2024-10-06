import { gsap } from 'gsap'

gsap.config({
  force3D: true,
})

export const openScale = (el = null) => {
  gsap.fromTo(
    el || '.open-scale',
    {
      scale: 0,
    },
    {
      scale: 1,
      duration: 0.25,
      stagger: 0.08,
      // ease: 'elastic.out(1,0.3)'
    }
  )
}

export const useAnimations = () => {
  return {
    openScale,
  }
}
