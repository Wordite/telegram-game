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

export const rotateFortuneWheel = (rotationStart = 0, el = '.spin-wheel') => {
  const tl = gsap.timeline()

  tl.fromTo(
    el,
    {
      rotation: rotationStart,
    },
    {
      rotation: rotationStart + 1250,
      duration: 5,
      ease: ' power2. ease-in-out',
    }
  )

  return () => tl.kill()
}

export const useAnimations = () => {
  return {
    openScale,
    rotateFortuneWheel,
  }
}
