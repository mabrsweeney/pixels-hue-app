import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { diceApi } from './diceSlice'
import { settingsApi } from './settingsSlice'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [diceApi.reducerPath]: diceApi.reducer,
    [settingsApi.reducerPath]: settingsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
        .concat(diceApi.middleware)
        .concat(settingsApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)