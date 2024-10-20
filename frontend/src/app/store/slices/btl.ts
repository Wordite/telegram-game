import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IBtlState {
  btl: number
}

const initialState: IBtlState = {
  btl: 600,
}

export const btlSlice = createSlice({
  name: 'btl',
  initialState,
  reducers: {
    increaseBtl: (state, action: PayloadAction<number>) => {
      state.btl += action.payload
    },
    decreaseBtl: (state, action: PayloadAction<number>) => {
      state.btl -= action.payload
    },
  },
})

export const { increaseBtl, decreaseBtl } = btlSlice.actions
export const selectBtl = (state) => state.btl.btl
export default btlSlice.reducer
