import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const MangaSlice = createSlice({
  name: "Manga",
  initialState: {
    TopManga: [] as any[],
  },
  reducers: {
    setTopManga(state, action: PayloadAction<any[]>) {
      state.TopManga = [...state.TopManga, ...action.payload];
    },
  },
});

export const MangaActions = MangaSlice.actions;

export default MangaSlice;
