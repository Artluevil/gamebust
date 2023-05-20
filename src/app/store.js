import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from '../features/Games/gamesSlice'
import searchReducer from '../features/Games/searchSlice'

export const store = configureStore({
  reducer: {
      games: gamesReducer,
      search: searchReducer,  
  },
});
