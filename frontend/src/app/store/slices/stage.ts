import { createSlice } from '@reduxjs/toolkit'

export interface ICoinsState {
  step: number
}

const initialState: ICoinsState = {
  step: 1.1,
}

export const stageSlice = createSlice({
  name: 'stage',
  initialState,
  reducers: {
    upgradeStage: (state) => {
      const newStage = (Number(state.step) + 0.1).toFixed(1)
      if (newStage >= 2.1) return
      state.step = newStage
    },
  },
})

export const { upgradeStage } = stageSlice.actions
export const selectStage = (state) => state.stage.step
export default stageSlice.reducer
