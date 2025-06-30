import { configureStore } from '@reduxjs/toolkit'
import cocktailReducer from '../../features/cocktails/cocktailSlice'

export const store = configureStore({
  reducer: {
    cocktails: cocktailReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
