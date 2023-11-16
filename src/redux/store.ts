import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './feature/tokenSlice';
import userReducer from './feature/userSlice';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
