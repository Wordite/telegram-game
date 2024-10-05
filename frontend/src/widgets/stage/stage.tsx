import flask from '@assets/icons/flask.png'
import StageProgressBar from '@components/stageProgressBar/stageProgressBar'
import coin from '@assets/icons/coin.png'
import { useRef } from 'react'
import { upgradeStage } from '@app/store/slices/stage'
import { useDispatch } from 'react-redux'
import { decreaseCoins } from '@app/store/slices/coins'
import PurpleBlock from '@shared/purpleBlock/purpleBlock'


const Stage = () => {
  const progressRef = useRef(null)
  const dispatch = useDispatch()

  const clickHandler = () => {
    dispatch(upgradeStage())
    dispatch(decreaseCoins(4.99))
  }

  return (
    <section className='stage open-scale relative w-full h-[152px] z-20 mt-auto bg-gradient-to-t from-[#C6C4BA] to-[#D7D5CC] rounded-[12px]'>
      <div className='stage-bg' />

      <div className='h-[77px] flex items-center gap-[16px] px-[12px]'>
        <div className='stage-counter w-[60px] h-[60px] rounded-[8px] border-[1.6px] border-black flex items-center justify-center flex-col bg-biege-neutral'>
          <p className='text-[26px] text leading-[1em] relative z-10'>1.4</p>
          <p className='text text-[12px] text-secondary relative z-10'>Stage</p>
        </div>

        <div className='flex gap-[12px] items-center'>
          <img className='w-[48px] h-[48px]' src={flask} alt='flask' />

          <div className='pt-[4px] leading-[1em]'>
            <div className='flex items-center'>
              <p className='text-[20px] text'>+</p>
              <p className='text-[24px] text'>560</p>
            </div>

            <p className='text-[12px] text text-secondary mt-[8px]'>Improvement Reward</p>
          </div>
        </div>
      </div>

      <div data-clickable-effect='easy' className='clickable h-[76px] border-black border-[1.6px] rounded-[12px] overflow-hidden' ref={progressRef}>
        <StageProgressBar progress={40} />
        <PurpleBlock onClick={clickHandler} className='h-[55px] cursor-pointer -translate-y-[3px] rounded-[12px]'>
          <div className='flex items-center gap-[6px] pb-[4px]'>
            <p className='text text-[18px] relative z-10'>Buy Stage for</p>

            <img className='w-[22px] h-[24px]' src={coin} alt='coin' />

            <p className='text text-[18px] relative z-10'>4.99</p>
          </div>
        </PurpleBlock>
      </div>
    </section>
  )
}

export default Stage
