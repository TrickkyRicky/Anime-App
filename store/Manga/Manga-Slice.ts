import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Loader {
	choice: string;
	loading: boolean;
}

const MangaSlice = createSlice({
	name: 'Manga',
	initialState: {
		topManga: {
			manga: [] as any[],
			mangaLoader: false as boolean
		},
		topNovels: {
			manga: [] as any[],
			mangaLoader: false as boolean
		},
		topManhua: {
			manga: [] as any[],
			mangaLoader: false as boolean
		},
		topManhwa: {
			manga: [] as any[],
			mangaLoader: false as boolean
		},
		mostPopular: {
			manga: [] as any[],
			mangaLoader: false as boolean
		},
		// details will be an object an not an array
		mangaDetails: {
			details: {},
			detailLoader: false as boolean
		}
	},
	reducers: {
		setLoader(state, action: PayloadAction<Loader>) {
			switch (action.payload.choice) {
				case 'manga':
					state.topManga.mangaLoader = action.payload.loading;
					break;
				case 'novels':
					state.topNovels.mangaLoader = action.payload.loading;
					break;
				case 'manhua':
					state.topManhua.mangaLoader = action.payload.loading;
					break;
				case 'manhwa':
					state.topManhwa.mangaLoader = action.payload.loading;
					break;
				case 'bypopularity':
					state.mostPopular.mangaLoader = action.payload.loading;
					break;
				case 'mangaD':
					state.mangaDetails.detailLoader = action.payload.loading;
					break;
			}
		},
		setTopManga(state, action: PayloadAction<any[]>) {
			state.topManga.manga = [...state.topManga.manga, ...action.payload];
		},
		setTopNovels(state, action: PayloadAction<any[]>) {
			state.topNovels.manga = [...state.topNovels.manga, ...action.payload];
		},
		setTopManhua(state, action: PayloadAction<any[]>) {
			state.topManhua.manga = [...state.topManhua.manga, ...action.payload];
		},
		setTopManhwa(state, action: PayloadAction<any[]>) {
			state.topManhwa.manga = [...state.topManhwa.manga, ...action.payload];
		},
		setMostPopular(state, action: PayloadAction<any[]>) {
			state.mostPopular.manga = [...state.mostPopular.manga, ...action.payload];
		},
		setMangaDetails(state, action: PayloadAction<{}>) {
			state.mangaDetails.details = { ...action.payload };
		}
	}
});

export const MangaActions = MangaSlice.actions;

export default MangaSlice;
