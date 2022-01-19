import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Loader {
	choice: string;
	loading: boolean;
}

const AnimeSlice = createSlice({
	name: 'Anime',
	initialState: { 
		topAiring: {
			anime: [] as any[],
			anime5: [] as any[],
			animeLoader: false as boolean
		},
		topUpcoming: {
			anime: [] as any[],
			anime5: [] as any[],
			animeLoader: false as boolean
		},
		topSeasonal: {
			anime: [] as any[],
			animeLoader: false as boolean
		},
		topMovies: {
			anime: [] as any[],
			animeLoader: false as boolean
		},
		mostPopular: {
			anime: [] as any[],
			animeLoader: false as boolean,
			animeWithoutFirst: [] as any[],
			firstAnime: [] as any[]
		},
		// details will be an object an not an array
		animeDetails: {
			details: {} as any,
			detailLoader: false as boolean
		}
	},
	reducers: {
		setLoader(state, action: PayloadAction<Loader>) {
			switch (action.payload.choice) {
				case 'airing':
					state.topAiring.animeLoader = action.payload.loading;
					break;
				case 'upcoming':
					state.topUpcoming.animeLoader = action.payload.loading;
					break;
				case 'movie':
					state.topMovies.animeLoader = action.payload.loading;
					break;
				case 'season':
					state.topSeasonal.animeLoader = action.payload.loading;
					break;
				case 'bypopularity':
					state.mostPopular.animeLoader = action.payload.loading;
					break;
				case 'animeD':
					state.animeDetails.detailLoader = action.payload.loading;
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
		setTopSeasonal(state, action: PayloadAction<any[]>) {
			state.topSeasonal.anime = [...state.topSeasonal.anime, ...action.payload];
		},
		setMostPopular(state, action: PayloadAction<any[]>) {
			state.mostPopular.anime = [...state.mostPopular.anime, ...action.payload];
			state.mostPopular.animeWithoutFirst = [...action.payload].slice(1); 
			state.mostPopular.firstAnime = [...action.payload].slice(0, 1);
		},
		// change later details will be an object
		setAnimeDetails(state, action: PayloadAction<{}>) {
			state.animeDetails.details = { ...action.payload };
		},
		setTopAiringReset(state) {
			state.topAiring.anime = [];
			state.topUpcoming.anime = [];
		}
	}
});

export const AnimeActions = AnimeSlice.actions;

export default AnimeSlice;
