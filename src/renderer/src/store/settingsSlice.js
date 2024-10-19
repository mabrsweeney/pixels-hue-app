import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const settingsApi = createApi({
  reducerPath: 'settingsApi',
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    getSettings: builder.query({
      query: () => '/api/settings',
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSettingsQuery } = settingsApi