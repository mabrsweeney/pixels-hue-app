import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const hueApi = createApi({
  reducerPath: 'hueApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/hue' }),
  endpoints: (builder) => ({
    getLights: builder.query({
      query: () => '/lights'
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetLightsQuery } = hueApi
