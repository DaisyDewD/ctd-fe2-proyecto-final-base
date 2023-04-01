import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../app/store";
import { STATE_FETCH } from "./constants";
import { getQuote } from "./quoteAPI";
import { IQuote } from "./types";

export interface EstadoQuote {
  data: IQuote | null;
  stateFetch: STATE_FETCH;
}

const initialState: EstadoQuote = {
  data: null,
  stateFetch: STATE_FETCH.INACTIVE,
};

export const getQuoteAsync = createAsyncThunk(
  "quote/getQuote",
  async (character: string) => {
    return await getQuote(character);
  }
);

export const quoteSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    cleanQuote: () => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getQuoteAsync.pending, (state) => {
        state.stateFetch = STATE_FETCH.LOADING;
      })
      .addCase(getQuoteAsync.fulfilled, (state, action) => {
        state.stateFetch = STATE_FETCH.INACTIVE;
        state.data = action.payload;
      })
      .addCase(getQuoteAsync.rejected, (state) => {
        state.stateFetch = STATE_FETCH.ERROR;
      });
  },
});

export const { cleanQuote } = quoteSlice.actions;

export const getQuoteFromAPI =
  (character: string) => (dispatch: AppDispatch) => {
    dispatch(cleanQuote());
    dispatch(getQuoteAsync(character));
  };

export const getStateQuote = (state: RootState) => state.quote.data;
export const getStateOfRequest = (state: RootState) => state.quote.stateFetch;

export default quoteSlice.reducer;
