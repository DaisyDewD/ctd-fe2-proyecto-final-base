import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../app/store";
import { getNewsListAPI } from "./newsAPI";
import { INews } from "./types";

export interface NewsState {
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
    addPremiumSubscription: (state, action: PayloadAction<number>) => {
      state.premiumIdList = [...state.premiumIdList, action.payload];
    },
    cleanPremiumList: (state) => {
      state.premiumIdList = initialState.premiumIdList;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNewsListAsync.fulfilled, (state, action) => {
      const list = () => {
        const array: number[] = []; /*ver*/
        action.payload.forEach((news) => {
          news.isPremium && array.push(news.id);
        });
        return array;
      };
      state.newsList = action.payload;
      state.premiumIdList = list();
    });
  },
});

export const getNewsList = () => (dispatch: AppDispatch) => {
  return dispatch(getNewsListAsync());
};

export const { addPremiumSubscription, cleanPremiumList } = newsSlice.actions;

export default newsSlice.reducer;
