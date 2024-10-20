import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ITokensState {
  tokens: number
}

const initialState: ITokensState = {
  tokens: 0,
}

export const tokensSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    increaseTokens: (state, action: PayloadAction<number>) => {
      state.tokens += action.payload
    },
    decreaseTokens: (state, action: PayloadAction<number>) => {
      state.tokens -= action.payload
    },
  },
})

export const { increaseTokens, decreaseTokens } = tokensSlice.actions
export const selectTokens = (state) => state.tokens.tokens
export default tokensSlice.reducer
