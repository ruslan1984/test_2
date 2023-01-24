import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { TItemCard, TItemCardReducer } from "./types";

export const defaultState: TItemCardReducer = {
  loading: false,
  error: false,
  data: null,
};

export const requestCard = createAction<string>("requestCard");

export const itemCardSlice = createSlice({
  name: "itemCard",
  initialState: defaultState,
  reducers: {
    setCard: (state, { payload: data }: PayloadAction<TItemCard>) => ({
      ...state,
      data,
    }),
    setCardLoading: (state, { payload: loading }: PayloadAction<boolean>) => ({
      ...state,
      loading,
    }),
    setCardError: (state, { payload: error }: PayloadAction<boolean>) => ({
      ...state,
      error,
    }),
  },
});
export const { actions, reducer } = itemCardSlice;
