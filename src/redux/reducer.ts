import { APP_STORE_KEY } from "./selectors";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from "./state";

const appSlice = createSlice({
  name: APP_STORE_KEY,
  initialState,
  reducers: {
    setLoad: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setCategoriesData: (state, action: PayloadAction<any[]>) => {
      state.categories = action.payload;
    }
  },
});

export const {
  setLoad,
  setCategoriesData,
} = appSlice.actions;

export default appSlice.reducer;

