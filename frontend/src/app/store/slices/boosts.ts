import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IBoostsState {
  boosts: number
}

const initialState: IBoostsState = {
  boosts: 1000,
}

export const boostsSlice = createSlice({
  name: 'boosts',
  initialState,
  reducers: {
    increaseBoosts: (state, action: PayloadAction<number>) => {
      state.boosts += action.payload
    },
    decreaseBoosts: (state, action: PayloadAction<number>) => {
      state.boosts -= action.payload
    },
  },
})

export const { increaseBoosts, decreaseBoosts } = boostsSlice.actions
export const selectBoosts = (state) => state.boosts.boosts
export default boostsSlice.reducer
