import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaginationState {
  currentPage: number;
  pageSize: number;
  totalCount: number;
}

const initialState: PaginationState = {
  currentPage: 1,
  pageSize: 10,
  totalCount: 0,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
    setTotalCount: (state, action: PayloadAction<number>) => {
      state.totalCount = action.payload;
    },
  },
});

export const { setCurrentPage, setPageSize, setTotalCount } =
  paginationSlice.actions;

export default paginationSlice.reducer;
