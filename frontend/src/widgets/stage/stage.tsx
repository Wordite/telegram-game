import flask from '@assets/images/flask.png'
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
          <div className='w-[3rem] h-[3rem] translate-y-[.6875rem] border-black border-[.1rem] border-b-[0] relative rounded-[.75rem] bg-biege-1 flex justify-center items-center shadow-[inset_0_.125rem_var(--color-biege-2)] overflow-hidden'>
            <p className='text-[1.25rem] text relative z-10 mb-[.75rem]'>{stage}</p>
            <div className='w-full h-[1rem] bg-biege-3 absolute bottom-0 left-0 z-20' />
          </div>

          <div className='ml-auto pl-[1rem] pr-[.75rem] h-[3rem] translate-y-[.6875rem] border-black border-[.1rem] border-b-[0] relative rounded-[.75rem] bg-biege-1 flex justify-center items-center shadow-[inset_0_.125rem_var(--color-biege-2)] overflow-hidden'>
            <div className='text-[1.25rem] mb-[.75rem] flex items-center'>
              <p className='text text-[.75rem] relative z-10'>+</p>
              <p className='text text-[1rem] relative z-10'>3.84/h</p>
              <img className='w-[1.5rem] h-[1.5rem] ml-[.25rem]' src={flask} alt="flask" />
            </div>

            <div className='w-full h-[1rem] bg-biege-3 absolute bottom-0 left-0 z-20' />
          </div>
        </div>

        <StageProgressBar progress={(stage - 1) * 100} />
      </div>

      <PurpleBlock
        onClick={clickHandler}
        isHaveGlitter={true}
        className='h-[3.25rem] mt-[1rem] cursor-pointer clickable rounded-[.75rem] border-black border-[.1rem]'
      >
        <div className='flex items-center gap-[.375rem] pb-[.25rem]'>
          <p className='text text-[1.125rem] relative z-10'>Buy Stage for</p>

          <img className='w-[1.375rem] h-[1.5rem]' src={coin} alt='coin' />

          <p className='text text-[1.125rem] relative z-10'>4.99</p>
        </div>
      </PurpleBlock>
    </section>
  )
}

export default Stage
