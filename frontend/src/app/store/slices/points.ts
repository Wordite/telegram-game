import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IPointsState {
  points: number
}

const initialState: IPointsState = {
  points: 0,
}

export const pointsSlice = createSlice({
  name: 'points',
  initialState,
  reducers: {
    increasePoints: (state, action: PayloadAction<number>) => {
      state.points += action.payload
    },
    decreasePoints: (state, action: PayloadAction<number>) => {
      state.points -= action.payload
    },
  },
})

export const { increasePoints, decreasePoints } = pointsSlice.actions
export const selectPoints = (state) => state.points.points
export default pointsSlice.reducer
