import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FilterSlice {
  idFilter: number;
}

const initialState: FilterSlice = {
  idFilter: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setActiveFilter: (state, action: PayloadAction<number>) => {
      state.idFilter = action.payload;
    },
  },
});

export const { setActiveFilter } = filterSlice.actions;
export default filterSlice.reducer;
