import { configureStore } from '@reduxjs/toolkit';
import CitySlice from './reducer/city.slice';
//persist=localstorage
import storage from 'redux-persist/lib/storage';
import {persistReducer} from "redux-persist";
import { combineReducers } from '@reduxjs/toolkit';
const persistconfig={
    key:"root",
    version:1,
    storage
}
const reducer=combineReducers({
  cities:CitySlice
})
const persistedReducer=persistReducer(persistconfig,reducer)
 export const store=configureStore({
    reducer:persistedReducer
    
})