import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from '../features/Games/gamesSlice'
import searchReducer from '../features/Games/searchSlice'
import screenshotsReducer from '../features/Games/ScreenshotSlice'

export const store = configureStore({
  reducer: {
      games: gamesReducer,
      search: searchReducer,  
      screenshots: screenshotsReducer,
  },
});
