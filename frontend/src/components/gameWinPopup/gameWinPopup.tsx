import { selectGameClicks, selectGamePrize, selectGameType } from '@app/store/slices/game'
import { Popups } from '@app/types/popups'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Cross from '@assets/icons/cross.svg'
import { usePopup } from '@hooks/usePopup'
import tokens from '@assets/images/tokens.webp'
import gold from '@assets/images/gold.webp'
import flask from '@assets/images/flask.png'
import { GameTypes } from '@app/types/gameTypes'
import { selectPopup } from '@app/store/slices/popup'

const GameWinPopup = () => {
  const popup = useSelector(selectPopup)
  const { closePopup, openPopup } = usePopup(Popups.GameWin)
  const [fixedPrize, pointsPrize] = useSelector(selectGamePrize)
  const gameType = useSelector(selectGameType)
  const gameClicks = useSelector(selectGameClicks)
  const isActive = popup === Popups.GameWin

  const image = gameType === GameTypes.Silver ? tokens : gameType === GameTypes.Gold ? gold : flask
  const prizeValuta =
    gameType === GameTypes.Silver ? 'tokens' : gameType === GameTypes.Gold ? 'gold coinds' : 'BTL'
  const prizeTextColor =
    gameType === GameTypes.Silver
      ? 'text-orange'
      : gameType === GameTypes.Gold
      ? 'text-[#FFF240]'
      : 'text-purple-light'

  useEffect(() => {
    if (isActive) openPopup()
  }, [isActive])

  const crossClick = () => {
    closePopup()
  }

  return (
    <section
      className={`${isActive ? 'active' : ''} popup absolute w-[calc(100%-2.5rem)] top-1/2 left-1/2`}
    >
      <div className='bg-biege-biege-neutral-2 rounded-[1.25rem] px-[1.25rem] border-[.25rem] border-biege-4 relative'>
        <Cross
          onClick={crossClick}
          className='clickable absolute w-[2.625rem] h-[2.625rem] right-[-0.3125rem] top-[-2.75rem] p-[.3125rem] cursor-pointer'
        />

        <div className='absolute left-1/2 -translate-x-1/2 top-[-2.0625rem] w-[14.9375rem] h-[3rem] mt-[.625rem] mx-auto rounded-[1.5rem] bg-[#FF8A32] flex justify-center items-center'>
          <div className='absolute w-full h-full rounded-[1.5rem] top-0 left-0 border-[.0625rem] border-black' />
          <div className='absolute w-full h-full rounded-[1.5rem] top-0 left-0 shadow-[inset_0_-0.375rem_#FF5D1C]' />

          <p className='text-white text-[1.5rem] text relative z-10'>Winning!</p>
        </div>

        <img className='w-[12.1875rem] h-[12.1875rem] m-auto mt-[2.1875rem]' src={image} alt='prize' />

        <div className='text-[1.5rem] flex flex-col items-center leading-[1em] mt-[.75rem] '>
          <p className='flex justify-center gap-[.25rem]'>
            <span className='text relative z-10'>Your prize:</span>
            <span className={`${prizeTextColor} text relative z-10`}>
              {' '}
              {fixedPrize} {prizeValuta},{' '}
              {gameType !== GameTypes.Gold && <span className='text-orange'>{pointsPrize}</span>}
            </span>
          </p>
          <p className='text relative z-10'>
            <span className='text-orange'>
              {gameType === GameTypes.Gold && <span className='text-orange'>{pointsPrize} </span>}
              points
            </span>{' '}
            for {gameClicks} clicks
          </p>
        </div>

        <div
          onClick={crossClick}
          className='w-full h-[3.25rem] mt-[1rem] mb-[1.25rem] rounded-[.75rem] relative bg-purple-light clickable cursor-pointer flex justify-center items-center'
        >
          <div className='absolute w-full h-[3.25rem] rounded-[.8125rem] top-0 left-0 border-[.1rem] border-black' />
          <div className='absolute w-full h-[3.25rem] rounded-[.75rem] top-0 left-0 shadow-[inset_0_.25rem_var(--color-purple-soft)]' />
          <div className='absolute w-full h-[3.25rem] rounded-[.75rem] top-0 left-0 shadow-[inset_0_-0.5rem_rgba(176,94,244,.78)]' />

          <div className='flex text-[1.125rem] mb-[.3125rem]'>
            <p className='text relative z-10 ml-[.5rem]'>Collect</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GameWinPopup
