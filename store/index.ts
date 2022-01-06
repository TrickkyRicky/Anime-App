import { configureStore } from '@reduxjs/toolkit';

import AnimeSlice from './Anime/Anime-Slice';
import MangaSlice from './Manga/Manga-Slice';

const store = configureStore({
	reducer: {
		Anime: AnimeSlice.reducer,
		Manga: MangaSlice.reducer
	}
});

export default store;
