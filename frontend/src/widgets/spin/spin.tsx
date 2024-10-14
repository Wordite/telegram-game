import { selectSection } from '@app/store/slices/sidebar'
import { SidebarSections } from '@app/types/sidebarSections'
import { useAnimations } from '@hooks/useAnimations'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import wheel from '@assets/images/wheel.png'
import YellowTriangle from '@assets/icons/yellow_triangle.svg'
import star from '@assets/icons/star_white.png'
import './spin.css'

import coin from '@assets/icons/coin.png'
import flask from '@assets/icons/flask_wheel.png'
import btl from '@assets/icons/btl.png'
import PurpleBlock from '@shared/purpleBlock/purpleBlock'
import useTimer from '@hooks/useTimer'

const rewards = [
  { value: '1M', rotation: '-18deg', top: '46px', left: '129px', type: 'boost' },
  { value: '161M', rotation: '-49deg', top: '82px', left: '82px', type: 'gold' },
  { value: '20', rotation: '-75deg', top: '129px', left: '57px', type: 'btl' },
  { value: '12M', rotation: '-105deg', top: '180px', left: '60px', type: 'gold' },
  { value: '100', rotation: '-135deg', top: '228px', left: '86px', type: 'btl' },
  { value: '26M', rotation: '-165deg', top: '257px', left: '135px', type: 'gold' },
  { value: '10M', rotation: '-195deg', top: '260px', left: '190px', type: 'boost' },
  { value: '44M', rotation: '-225deg', top: '228px', left: '233px', type: 'gold' },
  { value: '40', rotation: '-255deg', top: '182px', left: '267px', type: 'btl' },
  { value: '6M', rotation: '-285deg', top: '127px', left: '267px', type: 'gold' },
  { value: '65', rotation: '-315deg', top: '80px', left: '240px', type: 'btl' },
  { value: '11M', rotation: '-345deg', top: '51px', left: '191px', type: 'gold' },
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

  useEffect(() => {
    if (isActive) openScale('.spin-item')
    else setTimeout(() => reset && reset(), 400)
  }, [isActive])

  const handleClick = () => {
    if (isSpining) return
    const resetAnimation = rotateFortuneWheel(rotatePosition)

    const reset = () => {{
      resetAnimation()
      setIsSpined(true)
      setRotatePosition(0)
      setIsSpining(false)
      setReset(null)
    }}

    setReset(() => reset)
    setIsSpining(true)

    setTimeout(() => {
      if (!reset) return

      setIsSpined(true)
      setRotatePosition(rotatePosition + 1250)
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
      className={`sidebar-section absolute w-full h-full pt-[96px] pb-[80px] bg-biege-biege-neutral-3 top-0 left-0 overflow-y-auto no-scrollbar ${
        isActive ? 'active' : ''
      }`}
    >
      <div className='px-[20px] pb-[22px] flex flex-col h-full'>
        <div className='flex flex-col items-center h-full'>
          <p className='spin-item text text-[24px] absolute translate-y-[-77px]'>Daily spin!</p>

          <div className='spin-item w-[355px] h-[354px] relative translate-y-[-25px]'>
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
                    <img className='w-[36px] h-[36px]' src={flask} alt='reward' />
                  )}
                  {reward.type === 'gold' && (
                    <img className='w-[29px] h-[32px]' src={coin} alt='reward' />
                  )}
                  {reward.type === 'btl' && (
                    <img className='w-[28px] h-[28px]' src={btl} alt='reward' />
                  )}

                  <p className='text-[16px] text relative z-10 leading-[1em] mt-[3px]'>
                    {reward.value}
                  </p>
                </div>
              ))}
            </div>

            <YellowTriangle className='w-[32px] h-[43px] absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2' />
            <img
              className='w-[64px] h-[69px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
              src={coin}
              alt='coin'
            />
          </div>

          <PurpleBlock
            isHaveGlitter={true}
            onClick={handleClick}
            className={`spin-item ${
              isSpining ? 'disabled' : ''
            } w-full h-[52px] text-[18px] mt-auto border-black border-[1.6px] rounded-[12px] clickable cursor-pointer`}
          >
            {isSpined ? (
              <div className='spin-button-content flex items-center'>
                <p className='relative z-10 text'>Spin for</p>
                <img className='w-[16px] h-[16px] ml-[7px]' src={star} alt='star' />
                <p className='relative z-10 text ml-[4px]'>95</p>
              </div>
            ) : (
              <p className='relative z-10 text'>Free</p>
            )}
          </PurpleBlock>

          <div
            style={{ height: isSpined ? '1.5em' : '0' }}
            className='spin-item text-[12px] pr-[3px] overflow-hidden text mt-[6px] duration-300'
          >
            <span className='text-orange'>Free spin in:</span> {time}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spin
