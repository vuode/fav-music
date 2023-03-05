import {configureStore} from '@reduxjs/toolkit'

import {loadState, saveState} from '../utils/localStorage'

import albums from './features/albums/albumsSlice'

const stateName = 'app'

const preloadedState = loadState(stateName)

export const store = configureStore({
  reducer: {
    albums,
  },
  preloadedState,
})

store.subscribe(() => {
  const currentState = store.getState()
  saveState(stateName, {albums: currentState.albums})
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
