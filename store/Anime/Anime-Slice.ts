import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const AnimeSlice = createSlice({
  name: "Anime",
  initialState: {
    TopAnime: [] as any[],
  },
  reducers: {
    setTopAnime(state, action: PayloadAction<any[]>) {
      state.TopAnime = [...state.TopAnime, ...action.payload];
    },
  },
});

export const AnimeActions = AnimeSlice.actions;

export default AnimeSlice;
