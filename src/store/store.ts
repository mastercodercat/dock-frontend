import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "./modules/auth";
import rateReducer from "./modules/rate";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    rate: rateReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
