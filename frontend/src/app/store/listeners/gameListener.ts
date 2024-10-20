import { createListenerMiddleware } from '@reduxjs/toolkit'
import { setPopup } from '../slices/popup'
import { decrementSeconds, finishGame, gameConfig, setPrize, startGame } from '../slices/game'
import { increaseTokens } from '../slices/tokens'
import { increasePoints } from '../slices/points'
import { increaseBtl } from '../slices/btl'
import { increaseCoins } from '../slices/coins'
import { resetGame } from '../slices/game'
import { Popups } from '@app/types/popups'
import { Currencies } from '@app/types/currencies'
import { hideScale, openScale } from '@hooks/useAnimations'

const listenerMiddleware = createListenerMiddleware()
let intervalId

listenerMiddleware.startListening({
  actionCreator: startGame,
  effect: (action, listenerApi) => {
    hideScale()

    intervalId = setInterval(() => {
      const { seconds, isFinished } = listenerApi.getState().game

      if (seconds > 1 && !isFinished) {
        listenerApi.dispatch(decrementSeconds())
      } else {
        clearInterval(intervalId)
        listenerApi.dispatch(finishGame())
      }
    }, 1000)
  },
})

listenerMiddleware.startListening({
  actionCreator: finishGame,
  effect: (action, listenerApi) => {
    const state = listenerApi.getState()
    const { clicks, gameType } = state.game
    const [multiplier, , fixedPrize] = gameConfig[gameType]
    const pointsPrize = clicks * multiplier

    listenerApi.dispatch(setPrize([fixedPrize, pointsPrize]))
    listenerApi.dispatch(setPopup(Popups.GameWin))
  },
})

// listenerMiddleware.startListening({
//   actionCreator: resetGame,
//   effect: (action, listenerApi) => {
//     const state = listenerApi.getState()
//     const { gameType, prize } = state.game
//     const currency = gameConfig[gameType][1]
//     const [fixedPrize, pointsPrize] = prize

//     listenerApi.dispatch(increasePoints(pointsPrize))

//     if (currency === Currencies.Tokens) listenerApi.dispatch(increaseTokens(fixedPrize))
//     else if (currency === Currencies.Gold) listenerApi.dispatch(increaseCoins(fixedPrize))
//     else if (currency === Currencies.BTL) listenerApi.dispatch(increaseBtl(fixedPrize))
//   },
// })

listenerMiddleware.startListening({
  actionCreator: setPopup,
  effect: (action, listenerApi) => {
    const state = listenerApi.getState()
    const prevState = listenerApi.getOriginalState()

    if (state.popup.popup === Popups.GameWin || prevState.popup.popup !== Popups.GameWin) return

    const { gameType, prize } = state.game
    const currency = gameConfig[gameType][3]
    const [fixedPrize, pointsPrize] = prize

    listenerApi.dispatch(increasePoints(pointsPrize))

    if (currency === Currencies.Tokens) listenerApi.dispatch(increaseTokens(fixedPrize))
    else if (currency === Currencies.Gold) listenerApi.dispatch(increaseCoins(fixedPrize))
    else if (currency === Currencies.BTL) listenerApi.dispatch(increaseBtl(fixedPrize))

    listenerApi.dispatch(resetGame())
    openScale()
  },
})

export default listenerMiddleware
