import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Loader {
  choice: string;
  loading: boolean;
}

const MangaSlice = createSlice({
  name: "Manga",
  initialState: {
    topManga: {
      manga: [] as any[],
      mangaLoader: false as boolean,
    },
    topNovels: {
      novel: [] as any[],
      novel5: [] as any,
      mangaLoader: false as boolean,
    },
    topManhua: {
      manga: [] as any[],
      mangaLoader: false as boolean,
    },
    topManhwa: {
      manga: [] as any[],
      manga5: [] as any[],
      mangaLoader: false as boolean,
    },
    mangaDetails: {
      details: {} as any,
      detailLoader: false as boolean,
    },
  },
  reducers: {
    setLoader(state, action: PayloadAction<Loader>) {
      switch (action.payload.choice) {
        case "manga":
          state.topManga.mangaLoader = action.payload.loading;
          break;
        case "novels":
          state.topNovels.mangaLoader = action.payload.loading;
          break;
        case "manhua":
          state.topManhua.mangaLoader = action.payload.loading;
          break;
        case "manhwa":
          state.topManhwa.mangaLoader = action.payload.loading;
          break;
        case "mangaD":
          state.mangaDetails.detailLoader = action.payload.loading;
          break;
      }
    },
    setTopManga(state, action: PayloadAction<any[]>) {
      state.topManga.manga = [...state.topManga.manga, ...action.payload];
    },
    setTopNovels(state, action: PayloadAction<any[]>) {
      state.topNovels.novel = [...state.topNovels.novel, ...action.payload];
      state.topNovels.novel.splice(0, 5);
      state.topNovels.novel5 = [...action.payload].slice(0, 5);
    },
    setTopManhua(state, action: PayloadAction<any[]>) {
      state.topManhua.manga = [...state.topManhua.manga, ...action.payload];
    },
    setTopManhwa(state, action: PayloadAction<any[]>) {
      state.topManhwa.manga = [...state.topManhwa.manga, ...action.payload];
      state.topManhwa.manga.splice(0, 5);
      state.topManhwa.manga5 = [...action.payload].slice(0, 5);
    },
    setMangaDetails(state, action: PayloadAction<{}>) {
      state.mangaDetails.details = { ...action.payload };
    },
    setMangaReset(state) {
      state.topManga.manga = [];
      state.topManhua.manga = [];
    },
    setMangaReset2(state) {
      state.topNovels.novel = [];
      state.topNovels.novel5 = [];
    },
    setMangaReset3(state) {
      state.topManhua.manga = [];
    },
    setMangaReset4(state) {
      state.topManhwa.manga = [];
      state.topManhwa.manga5 = [];
    },
  },
});

export const MangaActions = MangaSlice.actions;

export default MangaSlice;
