import { configureStore, combineReducers } from '@reduxjs/toolkit';

import AnimeSlice from './Anime/Anime-Slice';
import MangaSlice from './Manga/Manga-Slice';

const rootReducer = combineReducers({
	Anime: AnimeSlice.reducer,
	Manga: MangaSlice.reducer
});

const store = configureStore({
	reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
