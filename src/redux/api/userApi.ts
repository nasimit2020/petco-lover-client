import { baseApi } from './baseApi';

const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        userPasswordChange: build.mutation({
            query: (data) => {
                // console.log(userId, body);
                return ({
                    url: `/change-password`,
                    method: 'PATCH',
                    body: data
                })
            },
            invalidatesTags: ['user']
        }),

        createAdoptionRequest: build.mutation({
            query: (data) => {
                // console.log(userId, body);
                return ({
                    url: `/adoption-request`,
                    method: 'POST',
                    body: data
                })
            },
            invalidatesTags: ['adoption']
        }),

        getMyAdoption: build.query({
            query: () => ({
                url: '/my-adoption',
                method: 'GET'
            }),
            providesTags: ['adoption']
        }),

    }),
});

export const {
    useUserPasswordChangeMutation,
    useCreateAdoptionRequestMutation,
    useGetMyAdoptionQuery,
} = userApi;