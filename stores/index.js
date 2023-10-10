import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slices/CounterSlice";

export const store = configureStore({
  reducer: { counter: CounterReducer },
  devTools: process.env.NODE_ENV !== 'production', 
});
