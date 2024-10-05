import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ICoinsState {
  coins: number
}

const initialState: ICoinsState = {
  coins: 20000,
}

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    increaseCoins: (state, action: PayloadAction<number>) => {
      state.coins += action.payload
    },
    decreaseCoins: (state, action: PayloadAction<number>) => {
      state.coins -= action.payload
    },
  },
})

export const { increaseCoins, decreaseCoins } = coinsSlice.actions
export const selectCoins = (state) => state.coins.coins
export default coinsSlice.reducer
