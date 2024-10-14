import flask from '@assets/icons/flask.png'
import StageProgressBar from '@components/stageProgressBar/stageProgressBar'
import coin from '@assets/icons/coin.png'
import { selectStage, upgradeStage } from '@app/store/slices/stage'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCoins } from '@app/store/slices/coins'
import PurpleBlock from '@shared/purpleBlock/purpleBlock'

const Stage = () => {
  const dispatch = useDispatch()
  const stage = useSelector(selectStage)

  const clickHandler = () => {
    dispatch(upgradeStage())
    dispatch(decreaseCoins(4.99))
  }

  return (
    <section className='stage open-scale relative w-full z-20 mt-auto'>
      <div className=''>
        <div className='flex'>
          <div className='w-[48px] h-[48px] translate-y-[11px] border-black border-[1.6px] border-b-[0] relative rounded-[12px] bg-biege-1 flex justify-center items-center shadow-[inset_0_2px_var(--color-biege-2)] overflow-hidden'>
            <p className='text-[20px] text relative z-10 mb-[12px]'>{stage}</p>
            <div className='w-full h-[16px] bg-biege-3 absolute bottom-0 left-0 z-20' />
          </div>

          <div className='ml-auto pl-[16px] pr-[12px] h-[48px] translate-y-[11px] border-black border-[1.6px] border-b-[0] relative rounded-[12px] bg-biege-1 flex justify-center items-center shadow-[inset_0_2px_var(--color-biege-2)] overflow-hidden'>
            <div className='text-[20px] mb-[12px] flex items-center'>
              <p className='text text-[12px] relative z-10'>+</p>
              <p className='text text-[16px] relative z-10'>3.84/h</p>
              <img className='w-[24px] h-[24px] ml-[4px]' src={flask} alt="flask" />
            </div>

            <div className='w-full h-[16px] bg-biege-3 absolute bottom-0 left-0 z-20' />
          </div>
        </div>

        <StageProgressBar progress={(stage - 1) * 100} />
      </div>

      <PurpleBlock
        onClick={clickHandler}
        isHaveGlitter={true}
        className='h-[52px] mt-[16px] cursor-pointer clickable rounded-[12px] border-black border-[1.6px]'
      >
        <div className='flex items-center gap-[6px] pb-[4px]'>
          <p className='text text-[18px] relative z-10'>Buy Stage for</p>

          <img className='w-[22px] h-[24px]' src={coin} alt='coin' />

          <p className='text text-[18px] relative z-10'>4.99</p>
        </div>
      </PurpleBlock>
    </section>
  )
}

export default Stage
