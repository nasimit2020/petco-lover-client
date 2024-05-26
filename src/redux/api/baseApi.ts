// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api',
        credentials: 'include',
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem('accessToken')

            if (token) {
                headers.set('Authorization', `${token}`)
            }

            return headers

        }
    }),
    endpoints: () => ({}),
    tagTypes: ['user', 'pet']
})

