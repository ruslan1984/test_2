import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { TItem, TItemListReducer } from "./types";

export const defaultState: TItemListReducer = {
  loading: false,
  data: [],
  error: false,
};

export const requestList = createAction("requestList");

export const itemListSlice = createSlice({
  name: "itemList",
  initialState: defaultState,
  reducers: {
    setList: (state, { payload: data }: PayloadAction<TItem[]>) => {
      return { ...state, data };
    },
    setListLoading: (state, { payload: loading }: PayloadAction<boolean>) => {
      return { ...state, loading };
    },
    setListError: (state, { payload: error }: PayloadAction<boolean>) => ({
      ...state,
      error,
    }),
  },
});
export const { actions, reducer } = itemListSlice;
