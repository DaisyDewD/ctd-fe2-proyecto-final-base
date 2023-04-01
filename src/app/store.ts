import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import quoteReducer from "../features/quote/quoteSlice";
import newsReducer from "../features/news/newsSlices";

//El store es el contenedor de los reducers: quoteReducer y newsReducer
export const store = configureStore({
  reducer: {
    quote: quoteReducer,
    news: newsReducer,
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
