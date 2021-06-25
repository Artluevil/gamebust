import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import gamesReducer from '../features/Games/gamesSlice'

export const store = configureStore({
  reducer: {
      games: gamesReducer,
      
  },
  middleware: [...getDefaultMiddleware()]
});
