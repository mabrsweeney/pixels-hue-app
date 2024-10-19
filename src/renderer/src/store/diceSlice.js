import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const diceApi = createApi({
  reducerPath: 'diceApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getDice: builder.query({
      query: () => '/dice',
    }),
    rollDice: builder.mutation({
      query: (body) => {
        console.log(body)
        return {
          url: '/roll',
          method: 'POST',
          body,
        }
      }
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDiceQuery, useRollDiceMutation } = diceApi