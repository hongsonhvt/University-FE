import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from './feature/tokenSlice'
import  userReducer  from './feature/useSlice'


export const store = configureStore({
  reducer: {
    token: tokenReducer,
    user: userReducer
  },
})