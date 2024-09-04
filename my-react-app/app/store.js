import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from '../features/users/usersApi';
import { homesApi } from '../features/homes/homesApi';
import usersReducer from '../features/users/usersSlice';
import homesReducer from '../features/homes/homesSlice';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [homesApi.reducerPath]: homesApi.reducer,
    users: usersReducer,
    homes: homesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware, homesApi.middleware),
});
