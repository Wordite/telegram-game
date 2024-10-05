import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './slices/page'
import coinsReducer from './slices/coins'
import stageReducer from './slices/stage'

export const store = configureStore({
  reducer: {
    page: pageReducer,
    coins: coinsReducer,
    stage: stageReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
