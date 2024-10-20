import { selectPopup } from '@app/store/slices/popup'
import { useDispatch, useSelector } from 'react-redux'
import { Popups } from '@app/types/popups'
import { usePopup } from '@hooks/usePopup'
import Chest from '@assets/images/riches.svg'
import { startGame } from '@app/store/slices/game'

const GameTapPopup = () => {
  const popup = useSelector(selectPopup)
  const isActive = popup === Popups.GamePlayStart
  const { closePopup } = usePopup(Popups.GamePlayStart)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(startGame())
    closePopup()
  }

  return (
    <section
      onClick={handleClick}
      className={`${
        isActive ? 'active' : ''
      } popup no-translate absolute w-full h-[calc(100%-5.375rem)] top-0 left-0 z-[30000]`}
    >
      <div className='flex justify-center items-center flex-col gap-[2.1875rem] relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='text-[1.5rem] leading-[1em] flex flex-col items-center'>
            <p className='text relative z-10'>Tap actively for <span className='text-orange'>5 seconds</span></p>
            <p className='text relative z-10'>and take your <span className='text-orange'>prize!</span></p>
        </div>
        <Chest className='w-[9.375rem] h-[9.875rem]' />
      </div>
    </section>
  )
}

export default GameTapPopup
