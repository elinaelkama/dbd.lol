import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PerksResponse } from '../types/PerksResponse'

// Define a service using a base URL and expected endpoints
export const dbdApi = createApi({
	reducerPath: 'dbdApi',
	baseQuery: fetchBaseQuery({ baseUrl: '' }),
	endpoints: (builder) => ({
		getPerks: builder.query<PerksResponse, void>({
			query: () => `perks`,
		}),
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPerksQuery } = dbdApi