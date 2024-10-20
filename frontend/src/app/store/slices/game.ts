import { Currencies } from '@app/types/currencies'
import { GameTypes } from '@app/types/gameTypes'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type TGameSeconds = 0 | 1 | 2 | 3 | 4 | 5

export const gameConfig = {
  [GameTypes.Silver]: [3, 'Points', 30, Currencies.Tokens],
  [GameTypes.Gold]: [3, 'Points', 100, Currencies.Gold],
  [GameTypes.Diamond]: [6, 'Points', 25, Currencies.BTL],
}

export interface IGameState {
  gameType: GameTypes
  clicks: number
  seconds: TGameSeconds
  isActive: boolean
  isTimerStarted: boolean
  isFinished: boolean
  prize: [number, number] | null
}

const initialState: IGameState = {
  gameType: GameTypes.Silver,
  clicks: 0,
  seconds: 0,
  isActive: false,
  isTimerStarted: false,
  isFinished: false,
  prize: [0, 0],
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameType: (state, action: PayloadAction<GameTypes>) => {
      state.gameType = action.payload
    },
    addGameClick: (state) => {
      state.clicks = state.clicks + 1
    },
    startGame: (state) => {
      if (state.seconds || state.isTimerStarted) return
      state.seconds = 5
      state.isActive = true
      state.isTimerStarted = true
    },
    decrementSeconds: (state) => {
      if (state.seconds > 0) {
        state.seconds = (state.seconds - 1) as TGameSeconds
      }
    },
    finishGame: (state) => {
      state.isFinished = true
      state.isTimerStarted = false
      state.isActive = false
    },
    resetGame: (state) => {
      state.seconds = 0
      state.clicks = 0
      state.isActive = false
      state.isTimerStarted = false
      state.isFinished = false
      state.prize = [0, 0]
    },
    setPrize: (state, action: PayloadAction<Pick<IGameState, 'prize'>>) => {
      state.prize = action.payload
    },
  },
})

export const {
  setGameType,
  addGameClick,
  startGame,
  resetGame,
  finishGame,
  decrementSeconds,
  setPrize,
} = gameSlice.actions

export const selectGameType = (state) => state.game.gameType
export const selectGameClicks = (state) => state.game.clicks
export const selectGameSeconds = (state) => state.game.seconds
export const selectGameIsActive = (state) => state.game.isActive
export const selectGameIsFinished = (state) => state.game.isFinished
export const selectGameIsTimerStarted = (state) => state.game.isTimerStarted
export const selectGamePrize = (state) => state.game.prize

export default gameSlice.reducer
