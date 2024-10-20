import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './slices/page'
import coinsReducer from './slices/coins'
import stageReducer from './slices/stage'
import popupReducer from './slices/popup'
import sidebarReducer from './slices/sidebar'
import gameReducer from './slices/game'
import boostsReducer from './slices/boosts'
import btlReducer from './slices/btl'
import tokensReducer from './slices/tokens'
import pointsReducer from './slices/points' // Импортируем points
import listenerMiddleware from './listeners/gameListener'

console.log(listenerMiddleware)

export const store = configureStore({
  reducer: {
    page: pageReducer,
    coins: coinsReducer,
    stage: stageReducer,
    popup: popupReducer,
    sidebar: sidebarReducer,
    game: gameReducer,
    boosts: boostsReducer,
    btl: btlReducer,
    tokens: tokensReducer,
    points: pointsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
