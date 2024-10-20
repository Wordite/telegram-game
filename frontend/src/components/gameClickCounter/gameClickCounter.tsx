import { addGameClick, selectGameIsActive, selectGameIsFinished } from '@app/store/slices/game'
import { useDispatch, useSelector } from 'react-redux'

const GameClickCounter = () => {
  const dispatch = useDispatch()
  const isGameActive = useSelector(selectGameIsActive)
  const isGameFinished = useSelector(selectGameIsFinished)
  const isActive = isGameActive && !isGameFinished

  const handleClick = () => {
    if (!isActive) return
    dispatch(addGameClick())
  }

  return (
    <div
      onClick={handleClick}
      className={`${isActive ? 'block' : 'hidden'} game-click-counter absolute w-screen h-screen top-0 left-0 z-[30000]`}
    />
  )
}

export default GameClickCounter
