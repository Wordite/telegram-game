import { SidebarSections } from '@app/types/sidebarSections'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IPopupState {
  section: SidebarSections | '',
}

const initialState: IPopupState = {
    section: '',
}

export const sectionSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setSection: (state, action: PayloadAction<SidebarSections | ''>) => {
      state.section = action.payload
    },
  },
})

export const { setSection } = sectionSlice.actions
export const selectSection = (state) => state.sidebar.section
export default sectionSlice.reducer