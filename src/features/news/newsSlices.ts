import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../app/store";
import { getNewsListAPI } from "./newsAPI";
import { INews } from "./types";

interface NewsState {
  newsList: INews[] | null;
  premiumIdList: number[];
}

const initialState: NewsState = {
  newsList: null,
  premiumIdList: [],
};

export const getNewsListAsync = createAsyncThunk("getNews", async () => {
  const newsList = await getNewsListAPI();
  return newsList;
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addPremiumSubscription: (state, action: PayloadAction<number>) => ({
      ...state,
      premiumIdList: [...state.premiumIdList, action.payload],
    }),
    cleanPremiumList: (state) => ({
      ...state,
      premiumIdList: initialState.premiumIdList,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getNewsListAsync.fulfilled, (state, action) => {
      const premiumIdList = action.payload
        .filter((news) => news.isPremium)
        .map((news) => news.id);
      return { ...state, newsList: action.payload, premiumIdList };
    });
  },
});

export const getNewsList = () => (dispatch: AppDispatch) => {
  return dispatch(getNewsListAsync());
};

export const { addPremiumSubscription, cleanPremiumList } = newsSlice.actions;

export default newsSlice.reducer;
