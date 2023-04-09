import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { fetchApi } from './api'

export const store = configureStore({
  reducer: {
    [fetchApi.reducerPath]: fetchApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchApi.middleware),
})

setupListeners(store.dispatch)
