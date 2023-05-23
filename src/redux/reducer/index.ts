import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const appConfig = createSlice({
  name: 'app',
  initialState,
  reducers: {
    test: () => {
      //
    },
  },
});

export const { test } = appConfig.actions;

export default appConfig.reducer;
