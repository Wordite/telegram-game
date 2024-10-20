import { selectGameType } from '@app/store/slices/game'
import { GameTypes } from '@app/types/gameTypes'
import { Popups } from '@app/types/popups'
import btl from '@assets/icons/btl.png'
import { usePopup } from '@hooks/usePopup'
import { useSelector } from 'react-redux'

const GamePlayButton = () => {
  const { openPopup } = usePopup(Popups.GamePlayStart)
  const gameType = useSelector(selectGameType)
  const cost = gameType === GameTypes.Silver ? 10 : gameType === GameTypes.Gold ? 100 : 300

  const handleClick = () => {
    openPopup()
  }

  return (
    <div onClick={handleClick} className='open-scale hide-scale w-full h-[3.75rem] mt-auto rounded-[.75rem] relative bg-purple-light clickable cursor-pointer flex justify-center items-center'>
      <div className='absolute w-full h-[3.75rem] rounded-[.8125rem] top-0 left-0 border-[.1rem] border-black' />
      <div className='absolute w-full h-[3.75rem] rounded-[.75rem] top-0 left-0 shadow-[inset_0_.25rem_var(--color-purple-soft)]' />
      <div className='absolute w-full h-[3.75rem] rounded-[.75rem] top-0 left-0 shadow-[inset_0_-0.5rem_rgba(176,94,244,.78)]' />

      <div className='flex text-[1.125rem] mb-[.3125rem]'>
        <p className='text relative z-10'>Play</p>
        <p className='text relative z-10 ml-[.5rem]'>{cost}</p>
        <img className='w-[1.625rem] h-[1.625rem] ml-[.375rem]' src={btl} alt='btl' />
      </div>
    </div>
  )
}

export default GamePlayButton
