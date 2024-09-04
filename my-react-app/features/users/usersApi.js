import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: () => '/users',
    }),
  }),
});

export const { useFetchUsersQuery } = usersApi;
