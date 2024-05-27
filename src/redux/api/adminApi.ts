import { baseApi } from './baseApi';

const adminApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllUsers: build.query({
            query: () => ({
                url: '/users',
                method: 'GET'
            }),
            providesTags: ['user']
        }),

        getSingleUser: build.query({
            query: () => ({
                url: '/profile',
                method: 'GET'
            }),

        }),

        updateUserProfile: build.mutation({
            query: ({ userId, data }) => {
                // console.log(userId, body);
                return ({
                    url: `/profile/${userId}`,
                    method: 'PUT',
                    body: data
                })
            },
            invalidatesTags: ['user']
        }),

        addPet: build.mutation({
            query: (data) => {
                console.log(data);
                return ({
                    url: '/pets',
                    method: 'POST',
                    body: data
                })
            },
            invalidatesTags: ['pet']
        }),

        getAllPets: build.query({
            query: () => ({
                url: '/pets',
                method: 'GET'
            }),
            providesTags: ['pet']
        }),

        getSinglePet: build.query({
            query: ({ petId }) => ({
                url: `/pet/${petId}`,
                method: 'GET'
            }),

        }),
    }),
});

export const {
    useGetAllUsersQuery,
    useGetSingleUserQuery,
    useUpdateUserProfileMutation,
    useAddPetMutation,
    useGetAllPetsQuery,
    useGetSinglePetQuery,
} = adminApi;