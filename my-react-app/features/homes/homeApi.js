import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const homesApi = createApi({
  reducerPath: 'homesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    fetchHomesByUser: builder.query({
      query: (userId) => `/homes?userId=${userId}`,
    }),
    updateHomeUsers: builder.mutation({
      query: ({ homeId, userIds }) => ({
        url: `/homes/${homeId}/users`,
        method: 'PUT',
        body: { userIds },
      }),
    }),
  }),
});

export const { useFetchHomesByUserQuery, useUpdateHomeUsersMutation } = homesApi;
