import { configureStore } from '@reduxjs/toolkit';
import sampReducer from '../features/samp/sampSlice';



export const store = configureStore({
  reducer: {
    samp: sampReducer,
  },
});