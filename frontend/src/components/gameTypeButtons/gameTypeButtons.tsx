import { GameTypes } from '@app/types/gameTypes'
import { selectGameType, setGameType } from '@app/store/slices/game'
import { useDispatch, useSelector } from 'react-redux'
import './gameTypeButtons.css'

const GameTypeButtons = () => {
  const dispatch = useDispatch()
  const gameType = useSelector(selectGameType)

  const handleClick = (type: GameTypes) => {
    dispatch(setGameType(type))
  }

  return (
    <div className='open-scale hide-scale game-type-buttons w-full flex gap-[.5rem] justify-center translate-y-[-1.5625rem]'>
      <div
        className={`${
          gameType === GameTypes.Silver ? 'border-[#E0752F]' : 'border-transparent'
        } border-[.125rem] rounded-[.625rem] duration-150`}
      >
        <div
          onClick={() => handleClick(GameTypes.Silver)}
          className={`px-[.625rem] h-[2rem] mt-auto rounded-[.5rem] relative bg-[#D1D1D1] clickable cursor-pointer flex justify-center items-center`}
        >
          <div className='absolute w-full h-[2rem] rounded-[.5rem] top-0 left-0 border-[.0625rem] border-black'></div>
          <div className='absolute w-full h-[2rem] rounded-[.5rem] top-0 left-0 shadow-[inset_0_.25rem_rgba(255,255,255,0.4)]'></div>
          <div className='absolute w-full h-[2rem] rounded-[.5rem] top-0 left-0 shadow-[inset_0_-0.25rem_rgba(155,155,155,0.4)]'></div>
          <div className='flex text-[.875rem]'>
            <p className='text relative z-10'>Silver</p>
          </div>
        </div>
      </div>

      <div
        className={`${
          gameType === GameTypes.Gold ? 'border-[#E0752F]' : 'border-transparent'
        } border-[.125rem] rounded-[.625rem] duration-150`}
      >
        <div
          onClick={() => handleClick(GameTypes.Gold)}
          className={`px-[.625rem] h-[2rem] mt-auto rounded-[.5rem] relative bg-[#F1D46C] clickable cursor-pointer flex justify-center items-center`}
        >
          <div className='absolute w-full h-[2rem] rounded-[.5rem] top-0 left-0 border-[.0625rem] border-black'></div>
          <div className='absolute w-full h-[2rem] rounded-[.5rem] top-0 left-0 shadow-[inset_0_.25rem_rgba(255,255,255,0.4)]'></div>
          <div className='absolute w-full h-[2rem] rounded-[.5rem] top-0 left-0 shadow-[inset_0_-0.25rem_rgba(137,111,54,0.4)]'></div>
          <div className='flex text-[.875rem]'>
            <p className='text relative z-10'>Gold</p>
          </div>
        </div>
      </div>

      <div
        className={`${
          gameType === GameTypes.Diamond ? 'border-[#E0752F]' : 'border-transparent'
        } border-[.125rem] rounded-[.625rem] duration-150`}
      >
        <div
          onClick={() => handleClick(GameTypes.Diamond)}
          className={`px-[.625rem] h-[2rem] mt-auto rounded-[.5rem] relative bg-[#00A6FB] clickable cursor-pointer flex justify-center items-center`}
        >
          <div className='absolute w-full h-[2rem] rounded-[.5rem] top-0 left-0 border-[.0625rem] border-black'></div>
          <div className='absolute w-full h-[2rem] rounded-[.5rem] top-0 left-0 shadow-[inset_0_.25rem_rgba(255,255,255,0.4)]'></div>
          <div className='absolute w-full h-[2rem] rounded-[.5rem] top-0 left-0 shadow-[inset_0_-0.25rem_rgba(5,25,35,0.4)]'></div>
          <div className='flex text-[.875rem]'>
            <p className='text relative z-10'>Diamond</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameTypeButtons
