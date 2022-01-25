import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Loader {
  choice: string;
  loading: boolean;
}

interface Season {
  season: string;
  data: [];
}

const AnimeSlice = createSlice({
  name: "Anime",
  initialState: {
    topAiring: {
      anime: [] as any[],
      anime5: [] as any[],
      animeLoader: false as boolean,
    },
    topUpcoming: {
      anime: [] as any[],
      anime5: [] as any[],
      animeLoader: false as boolean,
    },
    topSeasonal: {
      fall: [] as any[],
      spring: [] as any[],
      winter: [] as any[],
      summer: [] as any[],
      animeLoader: false as boolean,
    },
    topMovies: {
      anime: [] as any[],
      animeLoader: false as boolean,
    },
    mostPopular: {
      anime: [] as any[],
      // animeWithoutFirst: [] as any[],
      firstAnime: [] as any[],
      animeLoader: false as boolean,
    },
    // details will be an object an not an array
    animeDetails: {
      details: {} as any,
      detailLoader: false as boolean,
    },
    animeDetails2: {
      details: {} as any,
      detailLoader: false as boolean,
    },
  },
  reducers: {
    setLoader(state, action: PayloadAction<Loader>) {
      switch (action.payload.choice) {
        case "airing":
          state.topAiring.animeLoader = action.payload.loading;
          break;
        case "upcoming":
          state.topUpcoming.animeLoader = action.payload.loading;
          break;
        case "movie":
          state.topMovies.animeLoader = action.payload.loading;
          break;
        case "season":
          state.topSeasonal.animeLoader = action.payload.loading;
          break;
        case "bypopularity":
          state.mostPopular.animeLoader = action.payload.loading;
          break;
        case "animeD":
          state.animeDetails.detailLoader = action.payload.loading;
          break;
        case "animeD2":
          state.animeDetails2.detailLoader = action.payload.loading;
          break;
      }
    },
    setTopAiring(state, action: PayloadAction<any[]>) {
      state.topAiring.anime = [...state.topAiring.anime, ...action.payload];
      state.topAiring.anime.splice(0, 5);
      state.topAiring.anime5 = [...action.payload.slice(0, 5)];
    },
    setTopUpcoming(state, action: PayloadAction<any[]>) {
      state.topUpcoming.anime = [...state.topUpcoming.anime, ...action.payload];
      state.topUpcoming.anime.splice(0, 5);
      state.topUpcoming.anime5 = [...action.payload].slice(0, 5);
    },
    setTopMovies(state, action: PayloadAction<any[]>) {
      state.topMovies.anime = [...state.topMovies.anime, ...action.payload];
    },
    setTopSeasonal(state, action: PayloadAction<Season>) {
      switch (action.payload.season) {
        case "winter":
          state.topSeasonal.winter = [
            ...state.topSeasonal.winter,
            ...action.payload.data,
          ];
          break;

        case "spring":
          state.topSeasonal.spring = [
            ...state.topSeasonal.spring,
            ...action.payload.data,
          ];
          break;
        case "fall":
          state.topSeasonal.fall = [
            ...state.topSeasonal.fall,
            ...action.payload.data,
          ];
          break;
        case "summer":
          state.topSeasonal.summer = [
            ...state.topSeasonal.summer,
            ...action.payload.data,
          ];
          break;
      }
    },
    setMostPopular(state, action: PayloadAction<any[]>) {
      state.mostPopular.anime = [
        ...state.mostPopular.anime,
        ...action.payload,
      ].slice(1);
      state.mostPopular.firstAnime = [...action.payload].slice(0, 1);
    },
    // change later details will be an object
    setAnimeDetails(state, action: PayloadAction<{}>) {
      state.animeDetails.details = { ...action.payload };
    },
    setAnimeDetails2(state, action: PayloadAction<{}>) {
      state.animeDetails2.details = { ...action.payload };
    },
    setTopAiringReset(state) {
      state.topAiring.anime = [];
      state.topUpcoming.anime = [];
      state.topMovies.anime = [];
      state.mostPopular.anime = [];
      state.topSeasonal.winter = [];
      state.topSeasonal.fall = [];
      state.topSeasonal.spring = [];
      state.topSeasonal.summer = [];
    },
  },
});

export const AnimeActions = AnimeSlice.actions;

export default AnimeSlice;
