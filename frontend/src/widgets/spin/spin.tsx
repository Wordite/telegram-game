import { selectSection } from '@app/store/slices/sidebar'
import { SidebarSections } from '@app/types/sidebarSections'
import { useAnimations } from '@hooks/useAnimations'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import wheel from '@assets/images/wheel.webp'
import YellowTriangle from '@assets/icons/yellow_triangle.svg'
import star from '@assets/icons/star_white.png'
import './spin.css'

import coin from '@assets/icons/coin.png'
import flask from '@assets/icons/flask_wheel.png'
import btl from '@assets/icons/btl.png'
import PurpleBlock from '@shared/purpleBlock/purpleBlock'
import useTimer from '@hooks/useTimer'

const rewards = [
  { value: '1M', rotation: '-18deg', top: '2.875rem', left: '8.0625rem', type: 'boost', rotationPosition: 15 },
  { value: '161M', rotation: '-49deg', top: '5.125rem', left: '5.125rem', type: 'gold', rotationPosition: 47 },
  { value: '20', rotation: '-75deg', top: '8.0625rem', left: '3.5625rem', type: 'btl', rotationPosition: 77 },
  { value: '12M', rotation: '-105deg', top: '11.25rem', left: '3.75rem', type: 'gold', rotationPosition: 105 },
  { value: '100', rotation: '-135deg', top: '14.25rem', left: '5.375rem', type: 'btl', rotationPosition: 135 },
  { value: '26M', rotation: '-165deg', top: '16.0625rem', left: '8.4375rem', type: 'gold', rotationPosition: 167 },
  { value: '10M', rotation: '-195deg', top: '16.25rem', left: '11.6875rem', type: 'boost', rotationPosition: 194 },
  { value: '44M', rotation: '-225deg', top: '14.25rem', left: '14.5625rem', type: 'gold', rotationPosition: 223 },
  { value: '40', rotation: '-255deg', top: '11.375rem', left: '16.6875rem', type: 'btl', rotationPosition: 253 },
  { value: '6M', rotation: '-285deg', top: '7.9375rem', left: '16.6875rem', type: 'gold', rotationPosition: 282 },
  { value: '65', rotation: '-315deg', top: '5rem', left: '15rem', type: 'btl', rotationPosition: 314 },
  { value: '11M', rotation: '-345deg', top: '3.1875rem', left: '11.9375rem', type: 'gold', rotationPosition: 345 },
]

const Spin = () => {
  const section = useSelector(selectSection)
  const isActive = section === SidebarSections.DailySpin
  const { openScale, rotateFortuneWheel } = useAnimations()
  const [isSpined, setIsSpined] = useState(false)
  const [isSpining, setIsSpining] = useState(false)
  const [rotatePosition, setRotatePosition] = useState(0)
  const [reset, setReset] = useState(null)
  const time = useTimer(23063)
  const buttonRef = useRef(null)

  useEffect(() => {
    if (isActive) openScale('.spin-item')
    else setTimeout(() => reset && reset(), 400)
  }, [isActive])

  const handleClick = () => {
    if (isSpining || buttonRef.current.classList.contains('disabled')) return
    const resetAnimation = rotateFortuneWheel(rotatePosition, rotatePosition + 1800 + rewards[(Math.floor(Math.random() * rewards.length))].rotationPosition)

    const reset = () => {
      {
        resetAnimation()
        setIsSpined(true)
        setRotatePosition(0)
        setIsSpining(false)
        setReset(null)
      }
    }

    setReset(() => reset)
    setIsSpining(true)

    setTimeout(() => {
      if (!reset) return

      setIsSpined(true)
      setRotatePosition(rotatePosition + 1800)
      setIsSpining(false)
      setReset(null)
    }, 5300)
  }

  useEffect(() => {
    if (!isSpined) return

    openScale('.spin-button-content')
    reset && reset()
  }, [isSpined])

  return (
    <div
      className={`sidebar-section absolute w-full h-full pt-[6rem] pb-[5rem] bg-biege-biege-neutral-3 top-0 left-0 overflow-y-auto no-scrollbar ${
        isActive ? 'active' : ''
      }`}
    >
      <div className='px-[1.25rem] pb-[1.375rem] flex flex-col h-full'>
        <div className='flex flex-col items-center h-full'>
          <p className='spin-item text text-[1.5rem] absolute top-[-4.75rem]'>Daily spin!</p>

          <div className='spin-item w-[22.1875rem] h-[22.125rem] relative translate-y-[-1.5625rem]'>
            <div className='spin-wheel'>
              <img className='w-[100%] h-[100%]' src={wheel} alt='wheel' />

              {rewards.map((reward, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center absolute'
                  style={{
                    top: reward.top,
                    left: reward.left,
                    transform: `rotate(${reward.rotation})`,
                  }}
                >
                  {reward.type === 'boost' && (
                    <img className='w-[2.25rem] h-[2.25rem]' src={flask} alt='reward' />
                  )}
                  {reward.type === 'gold' && (
                    <img className='w-[1.8125rem] h-[2rem]' src={coin} alt='reward' />
                  )}
                  {reward.type === 'btl' && (
                    <img className='w-[1.75rem] h-[1.75rem]' src={btl} alt='reward' />
                  )}

                  {reward.type !== 'gold' ? (
                    <p
                      className={`text-[1rem] text relative z-10 leading-[1em] mt-[.1875rem] ${
                        reward.type === 'btl' ? 'text-orange' : ''
                      }`}
                    >
                      {reward.value}
                    </p>
                  ) : (
                    <>
                      <p className={`gold-text text text-[1rem] mt-[.1875rem] leading-[1em]`}>{reward.value}</p>
                    </>
                  )}
                </div>
              ))}
            </div>

            <YellowTriangle className='w-[2rem] h-[2.6875rem] absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2' />
            <img
              className='w-[4rem] h-[4.3125rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
              src={coin}
              alt='coin'
            />
          </div>

          <PurpleBlock
            isHaveGlitter={true}
            onClick={handleClick}
            ref={buttonRef}
            className={`spin-item ${
              isSpining ? 'disabled' : 'clickable cursor-pointer'
            } w-full h-[3.25rem] text-[1.125rem] mt-auto border-black border-[.1rem] rounded-[.75rem]`}
          >
            {isSpined ? (
              <div className='spin-button-content flex items-center'>
                <p className='relative z-10 text'>Spin for</p>
                <img className='w-[1rem] h-[1rem] ml-[.4375rem]' src={star} alt='star' />
                <p className='relative z-10 text ml-[.25rem]'>95</p>
              </div>
            ) : (
              <p className='relative z-10 text'>Free</p>
            )}
          </PurpleBlock>

          <div
            style={{ height: isSpined ? '1.5em' : '0' }}
            className='spin-item text-[.75rem] pr-[.1875rem] overflow-hidden text mt-[.375rem] duration-300'
          >
            <span className='text-orange'>Free spin in:</span> {time}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spin
