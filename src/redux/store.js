import { configureStore } from '@reduxjs/toolkit';
import CitySlice from './reducer/city.slice';

export const store = configureStore({
  reducer:{
    cities:CitySlice
  }
})