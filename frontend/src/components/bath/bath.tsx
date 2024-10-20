import bathGoldBg from '@assets/images/golg_bath_bg.webp'
import bathDiamondBg from '@assets/images/diamond_bath_bg.webp'
import { useSelector } from 'react-redux'
import {
  selectGameClicks,
  selectGameIsActive,
  selectGameIsFinished,
  selectGameSeconds,
  selectGameType,
} from '@app/store/slices/game'
import { GameTypes } from '@app/types/gameTypes'

import silverBath from '@assets/images/bath_silver.webp'
import goldBath from '@assets/images/bath_gold.webp'
import silverBathBack from '@assets/images/silver_bath_back.png'
import coinThin from '@assets/icons/cointhin.png'
import cracks from '@assets/images/cracks.webp'
import diamond from '@assets/icons/diamond.png'

import { useEffect, useRef, useState } from 'react'
import { useAnimations } from '@hooks/useAnimations'
import './bath.css'

const Bath = () => {
  const gameType = useSelector(selectGameType)
  const bg = gameType === GameTypes.Diamond ? bathDiamondBg : bathGoldBg
  const bathImage = gameType === GameTypes.Silver ? silverBath : goldBath
  const gameClicks = useSelector(selectGameClicks)
  const isGameActive = useSelector(selectGameIsActive)
  const { bathClick, animateBathCoins, openScale, animateBathDiamonds, bathBackOpen } = useAnimations()
  const [coinGroups, setCoinGroups] = useState(null)
  const [diamonds, setDiamonds] = useState(null)
  const gameSeconds = useSelector(selectGameSeconds)
  const isFinished = useSelector(selectGameIsFinished)
  const cracksRef = useRef(null)

  useEffect(() => {
    if (coinGroups) return

    const getElementsGroup = (selector) => [...document.body.querySelectorAll(selector)]

    const group1 = getElementsGroup('.bath-coin-1')
    const group2 = getElementsGroup('.bath-coin-2')
    const group3 = getElementsGroup('.bath-coin-3')

    const diamonds = getElementsGroup('.diamond')

    setCoinGroups([group1, group2, group3])
    setDiamonds(diamonds)
  }, [])

  useEffect(() => {
    if (!isGameActive) return

    bathClick()
    animateBathCoins(coinGroups)

    if (gameType === GameTypes.Diamond) animateBathDiamonds(diamonds)
  }, [gameClicks])

  useEffect(() => {
    openScale('.bath')
    bathBackOpen('.bath-back')
  }, [gameType])

  useEffect(() => {
    if (gameSeconds === 5) cracksRef.current.classList.add('small')
    if (gameSeconds === 3) cracksRef.current.classList.add('medium')
    if (gameSeconds === 1) cracksRef.current.classList.add('big')
  }, [gameSeconds])

  useEffect(() => {
    if (!isFinished) return

    cracksRef.current.classList.remove('small')
    cracksRef.current.classList.remove('medium')
    cracksRef.current.classList.remove('big')
  }, [isFinished])

  return (
    <section>
      <img
        className='absolute left-0 top-0 w-full h-[calc(100%-5.38rem)] object-cover -z-30'
        src={bg}
        alt='game'
      />

      <div className='w-[21.56rem] h-[13.75rem] absolute left-1/2 -translate-x-1/2 top-[45%] -translate-y-1/2'>
        {gameType === GameTypes.Silver && (
          <img
            className='bath-back origin-bottom w-[19.38rem] h-[5rem] absolute left-[1.06rem] top-[1.75rem] object-cover -z-30'
            src={silverBathBack}
            alt='bath'
          />
        )}

        <img src={coinThin} className='bath-coin-1 absolute left-[45%] top-1/2 w-[3.56rem] h-[2.56rem] -z-30 opacity-[0.01]' />
        <img src={coinThin} className='bath-coin-1 absolute left-[40%] top-1/2 w-[3.56rem] h-[2.56rem] -z-30 opacity-[0.01]' />
        <img src={coinThin} className='bath-coin-1 absolute left-[42%] top-1/2 w-[3.56rem] h-[2.56rem] -z-30 opacity-[0.01]' />
        <img src={coinThin} className='bath-coin-1 absolute left-[50%] top-1/2 w-[3.56rem] h-[2.56rem] -z-30 opacity-[0.01]' />
        <img src={coinThin} className='bath-coin-2 absolute left-[55%] top-1/2 w-[3.56rem] h-[2.56rem] -z-30 opacity-[0.01]' />
        <img src={coinThin} className='bath-coin-2 absolute left-[38%] top-1/2 w-[3.56rem] h-[2.56rem] -z-30 opacity-[0.01]' />
        <img src={coinThin} className='bath-coin-2 absolute left-[44%] top-1/2 w-[3.56rem] h-[2.56rem] -z-30 opacity-[0.01]' />
        <img src={coinThin} className='bath-coin-3 absolute left-[41%] top-1/2 w-[3.56rem] h-[2.56rem] -z-30 opacity-[0.01]' />
        <img src={coinThin} className='bath-coin-3 absolute left-[42%] top-1/2 w-[3.56rem] h-[2.56rem] -z-30 opacity-[0.01]' />
        <img src={coinThin} className='bath-coin-3 absolute left-[39%] top-1/2 w-[3.56rem] h-[2.56rem] -z-30 opacity-[0.01]' />

        <img src={diamond} className='diamond absolute left-[44%] top-1/2 w-[1.88rem] h-[1.25rem] -z-30 opacity-[0.01]' />
        <img src={diamond} className='diamond absolute left-[39%] top-1/2 w-[1.88rem] h-[1.25rem] -z-30 opacity-[0.01]' />
        <img src={diamond} className='diamond absolute left-[39%] top-1/2 w-[1.25rem] h-[.63rem] -z-30 opacity-[0.01]' />
        <img src={diamond} className='diamond absolute left-[39%] top-1/2 w-[1.56rem] h-[.94rem] -z-30 opacity-[0.01]' />
        <img src={diamond} className='diamond absolute left-[39%] top-1/2 w-[1.88rem] h-[1.25rem] -z-30 opacity-[0.01]' />
        <img src={diamond} className='diamond absolute left-[39%] top-1/2 w-[1.56rem] h-[.94rem] -z-30 opacity-[0.01]' />
        <img src={diamond} className='diamond absolute left-[39%] top-1/2 w-[1.56rem] h-[.94rem] -z-30 opacity-[0.01]' />

        <div className='bath origin-bottom h-[13.75rem]'>
          <div
            ref={cracksRef}
            className='bath-crack w-[0] h-[6.88rem] absolute left-1/2 top-[64%] -translate-x-1/2 -translate-y-1/2'
          >
            <img className='w-[15.63rem] h-[6.88rem] object-cover' src={cracks} alt='crack' />
          </div>

          <img
            className='w-[21.56rem] h-[13.75rem] absolute left-0 top-0 top object-cover -z-30'
            src={bathImage}
            alt='bath'
          />
        </div>
      </div>
    </section>
  )
}

export default Bath
