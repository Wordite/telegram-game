import { Popups } from '@app/types/popups'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IPopupState {
  popup: Popups | 0,
}

const initialState: IPopupState = {
    popup: 0,
}

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setPopup: (state, action: PayloadAction<number>) => {
      state.popup = action.payload
    },
  },
})

export const { setPopup } = popupSlice.actions
export const selectPopup = (state) => state.popup.popup
export default popupSlice.reducer