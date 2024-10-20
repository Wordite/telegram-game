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
    }
  )
}

export const hideScale = (el = null, duration = 0.02) => {
  gsap.fromTo(
    el || '.hide-scale',
    {
      scale: 1,
    },
    {
      scale: 0,
      duration,
      stagger: 0.01,
    }
  )
}

export const rotateFortuneWheel = (rotationStart = 0, rotationEnd = 1800, el = '.spin-wheel') => {
  const tl = gsap.timeline()

  tl.fromTo(
    el,
    {
      rotation: rotationStart,
    },
    {
      rotation: rotationEnd,
      duration: 5,
      ease: 'power2.ease-in-out',
    }
  )

  return () => tl.kill()
}

export const bathClick = () => {
  const tl = gsap.timeline()
  tl.fromTo(
    '.bath',
    {
      scaleY: 1,
      scaleX: 1,
    },
    {
      scaleY: 0.96,
      scaleX: 1.03,
      duration: 0.1,
    }
  ).to('.bath', {
    duration: 0.19,
    ease: 'elastic.out(1.2,0.8)',
    scaleY: 1,
    scaleX: 1,
  })

  const bathBackTl = gsap.timeline()
  bathBackTl
    .fromTo(
      '.bath-back',
      {
        scaleY: 1,
        y: '0rem',
        x: '0rem',
      },
      {
        scaleY: 0.96,
        y: `${5 / 16}rem`,
        x: `${-5 / 16}rem`,
        duration: 0.1,
      }
    )
    .to('.bath-back', {
      duration: 0.19,
      ease: 'elastic.out(1.2,0.8)',
      scaleY: 1,
      y: '0rem',
      x: '0rem',
    })
}



const animateGroup = (group, delay) => {
  group.forEach((coinEl) => {
    if (gsap.isTweening(coinEl)) return

    const directionMultiplier = Math.random() > 0.5 ? 1 : -1
    const finalX = (Math.ceil(Math.random() * 75 + 20)) / 16
    const y = (Math.ceil(Math.random() * 80 + 155)) / 16

    gsap
      .timeline({ delay })
      .to(coinEl, { opacity: 1, duration: 0 })
      .to(coinEl, {
        duration: 0.25,
        y: `-${y}rem`,
        ease: 'circ.out',
        rotation: 160 * directionMultiplier,
        x: `${directionMultiplier * (finalX / 2)}rem`,
      })
      .to(coinEl, {
        duration: 0.3,
        y: '0rem',
        ease: 'circ.in',
        rotation: 320 * directionMultiplier,
        x: `${directionMultiplier * finalX}rem`,
      })
      .to(coinEl, {
        x: '0rem',
        y: '0rem',
        rotation: 0,
        duration: 0,
        opacity: 0,
      })
  })
}

export const animateBathCoins = (groups) => {
  animateGroup(groups[0], 0)
  animateGroup(groups[1], 0.03)
  animateGroup(groups[2], 0.05)
}

export const animateBathDiamonds = (diamonds) => {
  diamonds.forEach((diamond) => {
    if (gsap.isTweening(diamond)) return

    const directionMultiplier = Math.random() > 0.5 ? 1 : -1
    const finalX = (Math.ceil(Math.random() * 75 + 20)) / 16
    const y = (Math.ceil(Math.random() * 80 + 155)) / 16

    gsap.timeline()
      .to(diamond, { opacity: 1, duration: 0, rotation: 160 })
      .to(diamond, {
        duration: 0.25,
        y: `-${y}rem`,
        ease: 'circ.out',
        rotation: 320 * directionMultiplier,
        x: `${directionMultiplier * (finalX / 2)}rem`,
      })
      .to(diamond, {
        duration: 0.3,
        y: '0rem',
        ease: 'circ.in',
        rotation: 480 * directionMultiplier,
        x: `${directionMultiplier * finalX}rem`,
      })
      .to(diamond, {
        x: '0rem',
        y: '0rem',
        rotation: 0,
        duration: 0,
        opacity: 0,
      })
  })
}

const bathBackOpen = (el) => {
  gsap.fromTo(
    el,
    {
      scale: 0,
      y: '2.5rem',
    },
    {
      scale: 1,
      y: '0rem',
      duration: 0.27,
      delay: 0.01
    }
  )
}

export const useAnimations = () => {
  return {
    openScale,
    rotateFortuneWheel,
    hideScale,
    bathClick,
    animateBathCoins,
    animateBathDiamonds,
    bathBackOpen,
  }
}
