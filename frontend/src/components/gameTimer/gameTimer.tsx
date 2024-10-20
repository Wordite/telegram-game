import { selectGameIsFinished, selectGameIsTimerStarted, selectGameSeconds } from '@app/store/slices/game'
import { useAnimations } from '@hooks/useAnimations'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './gameTimer.css'

const GameTimer = () => {
  const gameSeconds = useSelector(selectGameSeconds)
  const isTimerStarted = useSelector(selectGameIsTimerStarted)
  const isGameFinished = useSelector(selectGameIsFinished)
  const { openScale, hideScale } = useAnimations()
  const textColor = gameSeconds <= 1 ? 'text-red' : gameSeconds <= 3 ? 'text-orange' : ''

  useEffect(() => {
    if (isGameFinished) return hideScale('.game-timer', 0.2)
    if (isTimerStarted) openScale('.game-timer')
  }, [isTimerStarted, isGameFinished])

  return (
    <div className='game-timer w-full absolute left-0 game-timer text-[2rem] flex justify-center'>
      <p className={`${textColor} text relative z-10 duration-200`}>{gameSeconds} seconds</p>
    </div>
  )
}

export default GameTimer
