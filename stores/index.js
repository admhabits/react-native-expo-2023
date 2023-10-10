import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slices/CounterSlice";
import AuthSlice from './slices/AuthSlice';

export const store = configureStore({
  reducer: { counter: CounterReducer },
  devTools: process.env.NODE_ENV !== 'production', 
});
