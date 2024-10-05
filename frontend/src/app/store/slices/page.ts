import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IPageState {
  page: string,
}

const initialState: IPageState = {
  page: 'home',
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<string>) => {
      state.page = action.payload
    },
  },
})

export const { setPage } = pageSlice.actions
export const selectPage = (state) => state.page.page
export default pageSlice.reducer
