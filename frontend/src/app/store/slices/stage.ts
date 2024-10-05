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
      state.step += 0.1
    },
  },
})

export const { upgradeStage } = stageSlice.actions
export const selectStage = (state) => state.stage.step
export default stageSlice.reducer
